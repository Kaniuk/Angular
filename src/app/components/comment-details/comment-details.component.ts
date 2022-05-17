import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentInterface} from "../../models/comment.interface";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  commentObj: CommentInterface;

  constructor(private activateRoute: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      let {state: {data}} = history;
      // this.postDetails = data;
      if (data) {
        this.commentObj = data;
      } else {
        this.activateRoute.params.subscribe(({id}) => {
          this.commentService.getComment(id).subscribe(value => this.commentObj = value);
        });
      }
    });
  }

}
