import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private commentHttp: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this.commentHttp.get<any[]>(this.commentsUrl)
  }
}