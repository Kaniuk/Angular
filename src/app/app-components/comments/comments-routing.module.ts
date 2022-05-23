import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comment-components/comments/comments.component";
import {CommentDetailsComponent} from "./comment-components/comment-details/comment-details.component";
import {CommentsResolver} from "./services/resolver/comments.resolver";
import {CommentResolver} from "./services/resolver/comment.resolver";
import {CanDeactivateGuard} from "./services/guard/can-deactivate.guard";
import {CommentActivateGuard} from "./services/guard/comment-activate.guard";


const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: ':id', component: CommentDetailsComponent,
        resolve: {commentData: CommentResolver},
        canActivate: [CommentActivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
