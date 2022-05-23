import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UsersResolver} from "./users-services/resolver/users.resolver";
import {UserResolver} from "./users-services/resolver/user.resolver";
import {DeactivatorGuard} from "./users-services/guard/deactivator.guard";
import {UserActivatorGuard} from "./users-services/guard/user-activator.guard";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver},
    canDeactivate: [DeactivatorGuard],
    children: [
      {
        path: ':id', component: UserDetailsComponent,
        resolve: {userData: UserResolver},
        canActivate: [UserActivatorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
