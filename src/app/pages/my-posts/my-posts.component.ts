import { Component, OnInit } from '@angular/core';
import { AddPostComponent } from '../add-post/add-post.component';
import { MatDialog } from '@angular/material/dialog';
import { Config } from '../../models/Config';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  config: Config = {
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: 6
  }

  posts: Post[];

  ngOnInit(): void {
  }

  getposts(){
    
  }
  openAdd() {
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '650px',
      minHeight: '310px',
      maxHeight: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getposts();
    });
    
}
onPageChange(event) {
  this.config.currentPage = event;
}
}

