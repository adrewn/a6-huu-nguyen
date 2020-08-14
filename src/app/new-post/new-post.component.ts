import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import { BlogPost } from '../BlogPost';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost();
  tags: String;
  constructor(private service: PostService, private route: Router) { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    this.tags.split(",").map(tag => tag.trim()); // convert the string to an array and remove whitespace
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "WEB422 Student";
    this.blogPost.views = 0;
    this.service.newPost(this.blogPost).subscribe((data) =>
    {
      this.route.navigate([`/admin`]);
    } )
  }

}
