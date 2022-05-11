import {Component, OnInit} from '@angular/core';

import {CommentInterface} from "../../models/comment.interface";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: CommentInterface[];

  constructor(private CommentService: CommentService) {
  }

  ngOnInit(): void {
    this.CommentService.getComments().subscribe(value => this.comments = value)
  }

}
