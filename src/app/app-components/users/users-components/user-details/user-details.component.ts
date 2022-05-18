import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../users-services/users.service";
import {UserInterface} from "../../../../models/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: UserInterface;

  constructor(private activateRoute: ActivatedRoute,
              private userService: UsersService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      const {state: {data}} = history;
      if (data) {
        this.user = data;
      } else {
        this.activateRoute.params.subscribe(({id}) => {
          this.userService.getById(id).subscribe(value => this.user = value);
        });
      }

    });
  }

}
