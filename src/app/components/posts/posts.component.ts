import {Component, OnInit} from '@angular/core';
import {IPosts} from "../../models/IPosts";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPosts[];

  constructor(private PostService: PostService) {
  }

  ngOnInit(): void {
    this.PostService.getPosts().subscribe(value => this.posts = value)
  }

}
