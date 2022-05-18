import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './psts-components/posts/posts.component';
import { PostDetailsComponent } from './psts-components/post-details/post-details.component';
import {PostComponent} from "./psts-components/post/post.component";
import {PostsService} from "./psts-components/services/posts.service";


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
  providers:[
    PostsService
  ]
})
export class PostsModule { }
