import {Component, OnInit} from '@angular/core';

import {PostsService} from "../services/posts.service";
import {PostInterface} from "../../../../models/post.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostInterface[];

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => this.posts = value);
  }

}
