import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from '../models/Job';
import { Config } from '../models/Config';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
 
  createJob(job:Job){
    return this.http.post(this.SERVER_URL + '/job/', job)
  }

  getAllJob(){
    return this.http.get<any>(this.SERVER_URL + '/job/')
  }
  
  applyJob(jobId){
    return this.http.get(this.SERVER_URL+'/job/'+jobId+'/apply')
  }
}
