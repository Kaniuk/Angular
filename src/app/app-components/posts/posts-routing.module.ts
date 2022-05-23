import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./psts-components/posts/posts.component";
import {PostDetailsComponent} from "./psts-components/post-details/post-details.component";
import {PostsResolver} from "./services/resolver/posts.resolver";
import {PostResolver} from "./services/resolver/post.resolver";
import {CanActivateGuard} from "./services/guard/can-activate.guard";
import {PostActivatorGuard} from "./services/guard/post-activator.guard";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canActivate: [CanActivateGuard],
    children: [
      {
        path: ':id', component: PostDetailsComponent,
        resolve: {postData: PostResolver},
        canActivate: [PostActivatorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
