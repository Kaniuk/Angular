import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UsersService} from "../../users-services/users.service";
import {UserInterface} from "../../../../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[];

  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({usersData}) => this.users = usersData);

  }

}
