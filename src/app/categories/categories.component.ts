import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any>;
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(returned => this.categories = returned);
  }

}
