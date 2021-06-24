import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private postService: PostsService , private userService: UserService , private _Activatedroute: ActivatedRoute, private _router: Router) {

  }

  postloaded: boolean = false;
 post: Post;
 user: User = this.userService.currentUserValue;

 postId: string;
  ngOnInit() {
    this.postId = this._Activatedroute.snapshot.paramMap.get("postId");
    this.getPost()
  }

  getPost() {
    this.postService.findPost(this.postId).subscribe((res:any)=>{
    this.post = res.post
    this.postloaded = true
    console.log(this.post)
    })
  }

  onEditPost() {
    this.postService.updatePost(this.post,this.post._id).subscribe(res => {
      this.toastr.success('You Update Your Post Sucessfully')
      }, err => {
        this.toastr.error(err)
        
        }
      )
}

onDeletePost(){
  this.postService.deletePost(this.post._id).subscribe(res=>{
    this.toastr.success('your post deleted successfully')
    this.router.navigate(['/all-posts']);
  },err=>{
    this.toastr.error(err)
  })
}
}
