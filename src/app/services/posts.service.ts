import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Config } from '../models/Config';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  SERVER_URL = 'http://localhost:3000';
  private currentPostSubject: BehaviorSubject<Post>;
  public currentPost: Observable<Post>;

  constructor(private http: HttpClient) {
    this.currentPostSubject = new BehaviorSubject<Post>(JSON.parse(localStorage.getItem('currentPost')));
    this.currentPost = this.currentPostSubject.asObservable();
  }

  public get currentPostValue(): Post {
    return this.currentPostSubject.value;
  }
  //done
  createPost(post: any) {
    return this.http.post<Post>(this.SERVER_URL + '/post/', post)
  }
// done
  getAllPost(config: Config): Observable<any> {
    let qs = ''
    qs += (config.currentPage ? '?page=' + config.currentPage : '')
    qs += (config.itemsPerPage ? '&size=' + config.itemsPerPage : '')
    return this.http.get<any>(this.SERVER_URL + '/post' + qs);
  }
  updatePost(id: string, post: Post) {
    return this.http.put<Post[]>(this.SERVER_URL + '/posts/:postId', { id, post })
  }

  findPost(postId: String): Observable<Post> {
    return this.http.get<Post>(this.SERVER_URL + '/post/'+ postId)
  }

}
