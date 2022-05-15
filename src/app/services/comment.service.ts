import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../models/comment.interface";
import {PostInterface} from "../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private commentHttp: HttpClient) {
  }

  getComments(): Observable<CommentInterface[]> {
    return this.commentHttp.get<CommentInterface[]>(this.commentsUrl);
  }

  getComment(id: string): Observable<CommentInterface> {
    return this.commentHttp.get<CommentInterface>(this.commentsUrl + '/' + id);
  }
}
