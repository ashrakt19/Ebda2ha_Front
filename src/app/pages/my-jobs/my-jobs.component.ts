import { Component, OnInit } from '@angular/core';
import { AddJobComponent } from '../add-job/add-job.component';
import { MatDialog } from '@angular/material/dialog';
import { Job } from 'src/app/models/Job';
import { CommentComponent } from '../comment/comment.component';
import { JobsService } from 'src/app/services/jobs.service'; 
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {

  constructor(public dialog: MatDialog, private jobService: JobsService, private userService: UserService) { }

  ngOnInit(): void {
    // this.listMyPosts()
  }

  openAdd() {
    const dialogRef = this.dialog.open(AddJobComponent, {
      width: '650px',
      minHeight: '200px',
      maxHeight: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.listMyPosts();
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
  jobs: Job
  // listMyPosts() {
  //   this.userService.myProfile().subscribe(res => {
  //     this.jobs = res.jobs
  //     console.log(this.jobs);
  //   })

  // }

}
