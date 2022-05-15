import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private postHttp: HttpClient) {
  }

  getPosts(): Observable<PostInterface[]> {
    return this.postHttp.get<PostInterface[]>(this.postUrl)
  }

  getPost(id: string): Observable<PostInterface> {
    return this.postHttp.get<PostInterface>(this.postUrl + '/' + id)
  }
}
