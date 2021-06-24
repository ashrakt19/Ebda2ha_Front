import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Config } from 'src/app/models/Config';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment.service';
import { PostsService } from 'src/app/services/posts.service';
import { AddPostComponent } from '../add-post/add-post.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog,private postService:PostsService,private commentService: CommentService) { }
  public focus;
  config: Config = {
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: 100,
  }

  ngOnInit() {
    this.getposts();
  }
  openAdd() {
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '650px',
      minHeight: '200px',
      maxHeight: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getposts();
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
// posts: Post[]
posts: Post[];

getposts() {
  this.postService.getAllPost(this.config).subscribe(res=>{
    // debugger
    console.log(res)
    this.posts=res.posts
  })
 
}

onPageChange(event) {
  this.config.currentPage = event;
  this.getposts()
}
}
