import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  SERVER_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  sendContactMail(feedback:Feedback){
    return this.http.post<any>(this.SERVER_URL+ '/aboutus/',feedback)

  }
}
