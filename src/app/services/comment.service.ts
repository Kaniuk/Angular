import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../models/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private commentHttp: HttpClient) {
  }

  getComments(): Observable<CommentInterface[]> {
    return this.commentHttp.get<CommentInterface[]>(this.commentsUrl)
  }
}
