import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./app-components/home/home.component";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./app-components/users/users.module').then(m => m.UsersModule)},
  {path: 'posts', loadChildren: () => import('./app-components/posts/posts.module').then(m => m.PostsModule)},
  {path: 'comments', loadChildren: () => import('./app-components/comments/comments.module').then(m => m.CommentsModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
