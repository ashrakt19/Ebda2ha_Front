import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable,BehaviorSubject } from "rxjs";
import { map } from 'rxjs/operators';

import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SERVER_URL = "http://localhost:3000";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }
  SignUp(user: User) {
    return this.http.post<User>(this.SERVER_URL + `/auth/SignUp`, user)
}

  login(email: string, password: string) {
      return this.http.post<any>(this.SERVER_URL + "/auth/joinUS", { email, password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }

              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
  getResetPass(email: string){
    return this.http.put<any>(this.SERVER_URL +'/auth/resetPassword', {email})
  }

  verifyEmail(code: String) {
    return this.http.put<any>(this.SERVER_URL + '/auth/validate', {code});
  }
}

