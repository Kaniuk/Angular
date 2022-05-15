import {Component, OnInit} from '@angular/core';
import {CommentInterface} from "../../models/comment.interface";
import {ActivatedRoute} from "@angular/router";
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
    this.activateRoute.params.subscribe(({id}) => {
      this.commentService.getComment(id).subscribe(value => this.commentObj = value);
    });
  }

}
