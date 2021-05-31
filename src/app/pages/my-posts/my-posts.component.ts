import { Component, OnInit } from '@angular/core';
import { AddPostComponent } from '../add-post/add-post.component';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../models/Post';
import { CommentComponent } from '../comment/comment.component';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  constructor(public dialog: MatDialog, private postService: PostsService, private userService: UserService) { }


  ngOnInit() {
    this.listMyPosts()
  }


  openAdd() {
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '650px',
      minHeight: '200px',
      maxHeight: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listMyPosts();
    });

  }
  openAddComment() {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '650px',
      minHeight: '310px',
      maxHeight: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }
  posts: Post
  listMyPosts() {
    this.userService.myProfile().subscribe(res => {
      this.posts = res.posts
      console.log(this.posts);
    })

  }


}

