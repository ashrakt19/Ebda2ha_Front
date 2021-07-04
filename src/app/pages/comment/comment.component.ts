import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  post: Post;
   postloaded: boolean = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService , private commentService: CommentService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      content: ['',[Validators.required, Validators.maxLength(100)]]

    })
  }
  user:User = this.userService.currentUserValue; 
  userId = this.user.idd
  postId;
  commentForm: FormGroup
  AddComment(){
   this.commentService.createcomment(this.commentForm.value, this.postId).subscribe(res=>{
     console.log('created')
   },err=>{
     this.toastr.error(err)
   })
   console.log(this.commentForm.value)
   console.log(this.postId)
   console.log(this.userId)
  }

}
