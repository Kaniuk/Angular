import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserDetailsInterface} from "../../models/userDetails.interface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: UserDetailsInterface;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      // this.userDetails = data;
      if (data) {
        this.userDetails = data;
      } else {
        this.activatedRoute.params.subscribe(({id}) => {
          this.userService.getUser(id).subscribe(value => this.userDetails = value);
        });
      }
    });
  }

}
