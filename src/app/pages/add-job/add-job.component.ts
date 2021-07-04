import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JobsService } from 'src/app/services/jobs.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  
  JobForm: FormGroup
  id: string

  constructor(public dialogRef: MatDialogRef<AddJobComponent>, private fb: FormBuilder,
    private http: HttpClient, private JobService: JobsService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.JobForm = this.fb.group({
      JobName: ['', [Validators.required]],
      JobDescription: ['', [Validators.required, Validators.minLength(20)]],
      addressLine: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required]],
      Salary: [''],
      facebookpage: [''],
      websitelink: [''],
    });
  }

  onSubmit() {
    this.JobService.createJob(this.JobForm.value).subscribe(res => {
      this.toastr.success('post created');
      this.JobForm.reset();

    }, err => {
      this.toastr.error(err)
    })
  }

  onCancel() {
    this.dialogRef.close();
  }

}
