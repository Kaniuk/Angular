import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {CommentInterface} from "../../../../models/comment.interface";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<CommentInterface[]> {
  constructor(private commentService:CommentService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentInterface[]> | Promise<CommentInterface[]> | CommentInterface[] {
    return this.commentService.getAll()
  }
}
