import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private commentService: CommentService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      content: ['',[Validators.required, Validators.maxLength(100)]]

    })
  }
  commentForm: FormGroup
  AddComment(){
   this.commentService.createcomment(this.commentForm.value).subscribe(res=>{
     console.log('created')
   },err=>{
     this.toastr.error(err)
   })
   console.log(this.commentForm.value)
  }

}
