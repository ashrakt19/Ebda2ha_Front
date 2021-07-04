import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Config } from 'src/app/models/Config';
import { Post } from 'src/app/models/Post';
import { Summry } from 'src/app/models/Summry';
import { CommentService } from 'src/app/services/comment.service';
import { PostsService } from 'src/app/services/posts.service';
import { AddPostComponent } from '../add-post/add-post.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-posts-admin',
  templateUrl: './posts-admin.component.html',
  styleUrls: ['./posts-admin.component.css']
})
export class PostsAdminComponent implements OnInit {
  public focus;

  constructor(public dialog: MatDialog, private postService: PostsService, private commentService: CommentService) { }

  config: Config = {
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: 100,
  }

  ngOnInit(): void {
    this.getposts();
    this.getCategory();
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

  posts: Post[];

  getposts() {
    this.postService.getAllPost(this.config).subscribe(res => {
      // console.log(res)
      this.posts = res.posts
    })

  }

  onPageChange(event) {
    this.config.currentPage = event;
    this.getposts()
  }

  search(value) {
    this.onSearch(value)
  }

  onSearch(key: string) {
    this.postService.search(key).subscribe((res: any) => {
      // console.log(this.posts)
      this.posts = res.posts
    })
  }

  summaries: Summry[] = []
  getCategory() {
    this.postService.getAllCategory().subscribe((res: any) => {
      this.summaries = res.categories
    }, err => {
      console.log(err)
    })
  }

  filter(categoryId) {
    if (categoryId !== "0") {
      this.postService.filter(categoryId).subscribe((res: any) => {
        this.posts = res.posts
        // console.log(this.posts)
      })
    }
  }
}
