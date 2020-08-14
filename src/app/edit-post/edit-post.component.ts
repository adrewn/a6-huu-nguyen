import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Router, ActivatedRoute} from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: String;
  constructor(private service: PostService, private router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getPostbyId(this.ActivatedRoute.snapshot.params['id']).subscribe(returned => 
      {
        this.blogPost = returned;
        this.tags = this.blogPost.tags.toString();
      });
  }

  // executed when a submit button is clicked
  formSubmit()
  {
    this.tags.split(",").map(tag => tag.trim());
    this.service.updatePostById(this.blogPost._id, this.blogPost).subscribe((data) => { this.router.navigate([`/admin`]);});
  }
  // executed when Delete button is clicked
  deletePost()
  {
    this.service.deletePostById(this.blogPost._id).subscribe(() => {this.router.navigate(['/admin'])});
  }


}
