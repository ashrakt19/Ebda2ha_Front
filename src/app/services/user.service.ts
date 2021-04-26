import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from "rxjs";
import { User } from '../models/User';

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
    // getById(id: number) {
    //     return this.http.get(`/users/` + id);
    // }
    SignUp(user: User) {
        return this.http.post<any>(this.SERVER_URL + `/users/register`, user)
    }
    // update(user: User) {
    //     return this.http.put(`/users/` + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`/users/` + id);
    // }
}