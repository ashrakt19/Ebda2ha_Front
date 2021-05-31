import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { User } from '../models/User';
import { ChangePassword } from '../models/ChangePassword';

@Injectable({ providedIn: 'root' })
export class UserService {
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

  myProfile():Observable<User> {
    return this.http.get<User>(this.SERVER_URL + '/profile')
  }

  createAvatar(pic:string){
    return this.http.post<User>(this.SERVER_URL+'profile/avatar',{pic})

  }
  updateProfile(user:User){
    return this.http.put<User>(this.SERVER_URL + '/profile/updateProfile', user)
  }
  changePass(changepassword: ChangePassword){
    return this.http.put<any>(this.SERVER_URL+'/profile/changePass',changepassword)
  }
}