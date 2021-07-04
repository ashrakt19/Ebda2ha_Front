import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Job } from 'src/app/models/Job';
import { User } from 'src/app/models/User';
import { JobsService } from 'src/app/services/jobs.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private jobService: JobsService , private userService: UserService , private _Activatedroute: ActivatedRoute, private _router: Router) { }

  jobloaded: boolean = false;
  job: Job;
  user: User = this.userService.currentUserValue;
 
  jobId: string;

  ngOnInit(): void {
    // this.jobId = this._Activatedroute.snapshot.paramMap.get("jobId");
    // this.getJob()
  }

  // getJob() {
  //   this.jobService.findJob(this.jobId).subscribe((res:any)=>{
  //   this.job = res.post
  //   this.jobloaded = true
  //   console.log(this.job)
  //   })
  // }

//   onEditJob() {
//     this.jobService.updateJob(this.job,this.job._id).subscribe(res => {
//       this.toastr.success('You Update Your Post Sucessfully')
//       }, err => {
//         this.toastr.error(err)
        
//         }
//       )
// }

// onDeleteJob(){
//   this.jobService.deleteJob(this.job._id).subscribe(res=>{
//     this.toastr.success('your post deleted successfully')
//     this.router.navigate(['/all-jobs']);
//   },err=>{
//     this.toastr.error(err)
//   })
// }

}
