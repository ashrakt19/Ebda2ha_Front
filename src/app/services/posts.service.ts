import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  SERVER_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  createPost(post: any): Observable<any> {
    return this.http.post<Post>(this.SERVER_URL + '/post/', { post })
  }

//   getposts(config: Config): Observable<Post[]> {
//     let qs = ''
//     qs += (config.currentPage ? '&pageNo=' + config.currentPage : '')
//     qs += (config.itemsPerPage ? '&size=' + config.itemsPerPage : '')
//     return this.http.get<Post[]>(this.SERVER_URL + '/post/?' + qs);
//   }
getAllPost(Id: string): Observable<Post> {
    return this.http.get<Post>(this.SERVER_URL + '/post/' + Id)
  }
//   listMyPosts (): Observable<Item>{
//     return this.http.get<Item>(this.SERVER_URL + '/posts/history-post')
//   }
}
