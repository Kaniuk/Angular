import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services/post.service";
import {PostInterface} from "../../models/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: PostInterface;

  constructor(private activateRoute: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      let {state: {data}} = history;
      // this.postDetails = data;
      if (data) {
        this.postDetails = data;
      } else {
        this.activateRoute.params.subscribe(({id}) => {
          this.postService.getPost(id).subscribe(value => this.postDetails = value);
        });
      }
    });
  }

}
