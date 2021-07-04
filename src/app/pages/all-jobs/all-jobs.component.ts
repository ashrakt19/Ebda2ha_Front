import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Config } from 'src/app/models/Config';
import { Job } from 'src/app/models/Job';
import { CommentService } from 'src/app/services/comment.service';
import { JobsService } from 'src/app/services/jobs.service';
import { AddJobComponent } from '../add-job/add-job.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

  constructor(public dialog: MatDialog, private jobService: JobsService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.getjobs()
  }

  openAdd() {
    const dialogRef = this.dialog.open(AddJobComponent, {
      width: '650px',
      minHeight: '200px',
      maxHeight: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getjobs();
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

  jobs: Job[];

  getjobs() {
    this.jobService.getAllJob().subscribe((res:any) => {
      console.log(res)
      this.jobs = res.alljob
    })

  }


}
