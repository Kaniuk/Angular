import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {UserInterface} from "../../../../models/user.interface";
import {UsersService} from "../users.service";

@Injectable({
  providedIn: 'root'
})

export class UsersResolver implements Resolve<UserInterface[]> {
  constructor(private usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface[]> | Promise<UserInterface[]> | UserInterface[] {
    return this.usersService.getAll();
  }

}
