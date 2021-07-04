import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Config } from '../models/Config';
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

  counterPosts(){
    return this.http.get(this.SERVER_URL+'/post/counter')
  }

  approvPost(postId: string) {
    // debugger
    return this.http.get(this.SERVER_URL + '/post/approve/' +postId)
  }

  updatePost(post: Post, postId): Observable<any> {
    return this.http.put<Post>(this.SERVER_URL + '/post/' + postId, post)
  }
  getAllUnapprovedPost(){
    return this.http.get(this.SERVER_URL+'/post/approve')
  }

  deletePost(postId: string) {
    return this.http.delete(this.SERVER_URL + '/post/' + postId)
  }
  filter(categoryId: string) {
    return this.http.get(this.SERVER_URL + '/post/filter?categoryId=' + categoryId)

  }
  search(key: string) {
    return this.http.get(this.SERVER_URL + '/post/search?key=' + key)
  }
  findPost(postId: String): Observable<Post> {
    return this.http.get<Post>(this.SERVER_URL + '/post/' + postId)
  }
  getAllCategory() {
    return this.http.get(this.SERVER_URL + '/category/')
  }
  deleteCategory(categoryId: string){
    return this.http.delete(this.SERVER_URL+'/category/'+categoryId)
  }
  AddCategory(name:string){
    return this.http.get(this.SERVER_URL+'/category/'+name)

  }
}
