import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostsService} from "../services/posts.service";
import {PostInterface} from "../../../../models/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetails: PostInterface;

  constructor(private activateRoute: ActivatedRoute,
              private postService: PostsService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      const {state: {data}} = history;
      if (data) {
        this.postDetails = data;
      } else {
        this.activateRoute.params.subscribe(({id}) => {
          this.postService.getById(id).subscribe(value => this.postDetails = value);
        });
      }
    });
  }

}
