import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentService} from "../comments/services/comment.service";
import {CommentInterface} from "../../../../models/comment.interface";


@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: CommentInterface;

  constructor(private activateRoute: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      const {state: {data}} = history;
      if (data) {
        this.commentDetails = data;
      } else {
        this.activateRoute.params.subscribe(({id}) => {
          this.commentService.getById(id).subscribe(value => this.commentDetails = value);
        });
      }
    });
  }


}
