import { Component, OnInit, Input } from '@angular/core';
import {BlogPost} from '../BlogPost';
import {PostService} from '../post.service'
@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  posts: Array<BlogPost>;
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getPosts(1,null,null).subscribe(returned => this.posts = returned.slice(0,3));
  }

}
