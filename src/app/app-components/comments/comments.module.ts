import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsRoutingModule} from './comments-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {CommentsComponent} from './comment-components/comments/comments.component';
import {CommentDetailsComponent} from './comment-components/comment-details/comment-details.component';
import {CommentService} from "./services/comment.service";
import {CommentComponent} from "./comment-components/comment/comment.component";
import {CommentsResolver} from "./services/resolver/comments.resolver";
import {CommentResolver} from "./services/resolver/comment.resolver";
import {CanDeactivateGuard} from "./services/guard/can-deactivate.guard";
import {CommentActivateGuard} from "./services/guard/comment-activate.guard";


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService,
    CommentsResolver,
    CommentResolver,
    CanDeactivateGuard,
    CommentActivateGuard
  ]
})
export class CommentsModule {
}
