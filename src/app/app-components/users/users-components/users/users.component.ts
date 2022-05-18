import {Component, OnInit} from '@angular/core';

import {UsersService} from "../../users-services/users.service";
import {UserInterface} from "../../../../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users = value);
  }

}
