import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "../../../models/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  posts: CommentInterface[];

  private _urlComments = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(this._urlComments);
  }

  getById(id: number): Observable<CommentInterface> {
    return this.http.get<CommentInterface>(this._urlComments + '/' + id);
  }
}
