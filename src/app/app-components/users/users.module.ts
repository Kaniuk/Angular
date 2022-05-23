import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from "./users-components/users/users.component";
import {UsersService} from "./users-services/users.service";
import {UserComponent} from './users-components/user/user.component';
import {UserDetailsComponent} from './users-components/user-details/user-details.component';
import {UsersResolver} from "./users-services/resolver/users.resolver";
import {UserResolver} from "./users-services/resolver/user.resolver";
import {DeactivatorGuard} from "./users-services/guard/deactivator.guard";
import {UserActivatorGuard} from "./users-services/guard/user-activator.guard";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService, UsersResolver, UserResolver,DeactivatorGuard,UserActivatorGuard]
})
export class UsersModule {
}
