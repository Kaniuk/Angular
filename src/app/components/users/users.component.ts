import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services/user.service";
import {UserInterface} from "../../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[];

  constructor(private UserService: UserService) {
  }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(value => this.users = value);
  }
}
