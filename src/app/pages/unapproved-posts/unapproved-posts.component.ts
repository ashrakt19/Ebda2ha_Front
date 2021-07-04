import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Config } from 'src/app/models/Config';
import { Post } from 'src/app/models/Post';
import { Summry } from 'src/app/models/Summry';
import { CommentService } from 'src/app/services/comment.service';
import { PostsService } from 'src/app/services/posts.service';
import { AddPostComponent } from '../add-post/add-post.component';
import { CommentComponent } from '../comment/comment.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-unapproved-posts',
  templateUrl: './unapproved-posts.component.html',
  styleUrls: ['./unapproved-posts.component.css']
})
export class UnapprovedPostsComponent implements OnInit {

  public focus;

  constructor(private router: Router, private toastr: ToastrService,public dialog: MatDialog,private toastar: ToastrService, private postService: PostsService, private userService: UserService, private commentService: CommentService, private _Activatedroute: ActivatedRoute) { }


  config: Config = {
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: 100,
  }

  post: Post
  approve(_id){
    // debugger
    this.postService.approvPost(_id).subscribe(res=>{
      this.toastar.success("approved")
      console.log(res)
    },err=>{
      console.log(err)
    })
    console.log('ssssssssssssssssssss' + this.post)
  }

_id: string;
postloaded: boolean = false;

  ngOnInit(): void {
    this.getposts();
    this.getCategory();
    this._id = this._Activatedroute.snapshot.paramMap.get("_id");

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
  this.postService.getAllUnapprovedPost().subscribe((res:any)=>{
    this.postloaded = true
    console.log(res)
    this.posts = res.posts
    this._id = res.id
  },err=>{
    console.log(err)
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

  DenyPost(_id){
    this.userService.refusePost(_id).subscribe(res=>{
      console.log(res)
      this.toastr.success('your post deleted successfully')

    },err=>{
      this.toastr.error(err)
    })
  }

}
