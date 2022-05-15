import {Component, OnInit} from '@angular/core';
import {PostDetailsInterface} from "../../models/postDetails.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: PostDetailsInterface;

  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.postDetails = data;
    });
  }

}
