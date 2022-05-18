import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsRoutingModule} from './comments-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {CommentsComponent} from './comment-components/comments/comments.component';
import {CommentDetailsComponent} from './comment-components/comment-details/comment-details.component';
import {CommentService} from "./comment-components/comments/services/comment.service";
import {CommentComponent} from "./comment-components/comment/comment.component";


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
    CommentService
  ]
})
export class CommentsModule {
}
