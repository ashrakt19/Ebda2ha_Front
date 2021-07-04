import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { User } from '../models/User';
import { ChangePassword } from '../models/ChangePassword';
import { MakeAdmin } from './../models/MakeAdmin';
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

  getAllUsers() {
    return this.http.get(this.SERVER_URL + '/profile/getUsers')
  }
  
  myProfile():Observable<User> {
    return this.http.get<User>(this.SERVER_URL + '/profile')
  }
  refusePost(postId: string){
    return this.http.delete(this.SERVER_URL + '/post/approve/' + postId)
  }

  getUser(userId: string){
    // debugger
    return this.http.get<User>(this.SERVER_URL+'/profile/'+userId)
  }

  createAvatar(pic, formData){
    return this.http.post(this.SERVER_URL+'/profile/avatar',formData)
  }
  updateProfile(user:User){
    return this.http.put<User>(this.SERVER_URL + '/profile/updateProfile', user)
  }

  changePass(changepassword: ChangePassword){
    return this.http.put<any>(this.SERVER_URL+'/profile/changePass',changepassword)
  }
  
  makeAdmin(userId: string){
    return this.http.get(this.SERVER_URL+'/profile/makeAdmin/'+userId)
  }
  blockUser(userId: string){
    return this.http.delete(this.SERVER_URL+'/profile/blockUser/'+userId)
  }
}