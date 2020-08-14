import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  
  querySub: any;
  post: BlogPost;
  commentName: string;
  commentText: string;
  constructor(private route: ActivatedRoute, private service: PostService, private router: Router) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this.service.getPostbyId(params['id']).subscribe(returned =>
        {
          this.post=returned;
          this.post.views++;
          this.service.updatePostById(this.post._id, this.post).subscribe();
        } );
    })
  }

  submitComment() {
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });
    this.service.updatePostById(this.post._id, this.post).subscribe(()=>{
      this.commentName="";
      this.commentText="";
    });
  }
  
  ngOnDestroy()
  {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
