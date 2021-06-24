import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class CommentService{
    constructor(private http: HttpClient){}
    SERVER_URL = 'http://localhost:3000';
    createcomment(content: string,postId:string){
        return this.http.post<any>(this.SERVER_URL + '/post/'+postId+'/comment/',{content})
    }
  }