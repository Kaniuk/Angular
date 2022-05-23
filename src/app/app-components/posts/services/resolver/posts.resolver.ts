import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {PostInterface} from "../../../../models/post.interface";
import {PostsService} from "../posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<PostInterface[]> {
  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface[]> | Promise<PostInterface[]> | PostInterface[] {
    return this.postsService.getAll();
  }

}

