import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';


@Injectable({ providedIn: 'root' })
export class UserService {
    SERVER_URL = "http://localhost:3000";
    constructor(private http: HttpClient) { }
    // getAll() {
    //     return this.http.get<User[]>(`/users`);
    // }

    // getById(id: number) {
    //     return this.http.get(`/users/` + id);
    // }

    signup(user: User) {
        return this.http.post<any>(this.SERVER_URL + `/users/register`, user)
    }

    // update(user: User) {
    //     return this.http.put(`/users/` + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`/users/` + id);
    // }
}