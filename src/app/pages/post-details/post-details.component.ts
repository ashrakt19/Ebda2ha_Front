import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor( private postService: PostsService , private userService: UserService , private _Activatedroute: ActivatedRoute, private _router: Router) {

  }
 post: Post;
 user: User = this.userService.currentUserValue;

 postId: string;
  ngOnInit() {
    this.postId = this._Activatedroute.snapshot.paramMap.get("postId");
    this.getPost()
  }

  getPost() {
    // debugger
    this.postService.findPost(this.postId).subscribe(res=>{
     this.post = res
     console.log(this.post)
    })
  }


}
