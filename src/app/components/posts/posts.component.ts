import {Component, OnInit} from '@angular/core';
import {PostInterface} from "../../models/post.interface";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostInterface[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value)
  }

}
