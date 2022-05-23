import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostInterface} from "../../../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: PostInterface[];

  private _urlPost = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this._urlPost);
  }

  getById(id: number): Observable<PostInterface> {
    return this.http.get<PostInterface>(this._urlPost + '/' + id);
  }
}
