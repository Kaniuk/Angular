import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./psts-components/posts/posts.component";
import {PostDetailsComponent} from "./psts-components/post-details/post-details.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
