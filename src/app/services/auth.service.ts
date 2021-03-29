import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SignupRequest } from '../models/SignupRequest';
import { LoginRequest } from '../models/LoginRequest';
import { AuthResult } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SERVER_URL = "http://localhost:3000";
  token: any
  tokenObserver: any = new Observable(sub => {
    sub.next()
  })

  constructor(private http: HttpClient) {
    this.accessToken = localStorage.getItem("accessToken");
  }


  //sign up API
  sigup(request: SignupRequest): Observable<any> {
    return this.http.post<any>(this.SERVER_URL + "/users/register", request);
  }
  //login API
  login(request: LoginRequest): Observable<AuthResult> {
    return this.http.post<AuthResult>(this.SERVER_URL + "/auth/joinUs", request);
  }


  //Verify
  verify(code: number, useremail: string): Observable<any> {
    return this.http.post<any>(this.SERVER_URL + "/auth/validate", {
      code,
      useremail
    });
  }




  loggedIn() {
    return !!localStorage.getItem("accessToken");
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  accessToken: string;
  username: string;
  tokenForm = "x-auth-token ";
}

