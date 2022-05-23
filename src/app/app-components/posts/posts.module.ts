import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './psts-components/posts/posts.component';
import {PostDetailsComponent} from './psts-components/post-details/post-details.component';
import {PostComponent} from "./psts-components/post/post.component";
import {PostsService} from "./services/posts.service";
import {PostsResolver} from "./services/resolver/posts.resolver";
import {PostResolver} from "./services/resolver/post.resolver";
import {CanActivateGuard} from "./services/guard/can-activate.guard";
import {PostActivatorGuard} from "./services/guard/post-activator.guard";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService,
    PostsResolver,
    PostResolver,
    CanActivateGuard,
    PostActivatorGuard

  ]
})
export class PostsModule {
}
