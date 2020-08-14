import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  perPage: number = 6;
  constructor(private http: HttpClient) { }
  getPosts(page, tag, category): Observable<BlogPost[]> {
    if (tag != null && tag != undefined && category != null && category != undefined)

      return this.http.get<BlogPost[]>(`https://hungnguyen--web422.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage}&tag=${tag}&category=${category}`);
    
    else if (tag != null && tag != undefined)

      return this.http.get<BlogPost[]>(`https://hungnguyen--web422.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage}&tag=${tag}`);
    
    else if (category != null && category != undefined)
      
      return this.http.get<BlogPost[]>(`https://hungnguyen--web422.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage}&category=${category}`);
    
    else {
      
      return this.http.get<BlogPost[]>(`https://hungnguyen--web422.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage}`);
    
    }
  }

  getPostbyId(id): Observable<BlogPost>
  {
    return this.http.get<BlogPost>(`https://hungnguyen--web422.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>
  {
    return this.http.get<BlogPost>('https://hungnguyen--web422.herokuapp.com/api/categories');
  }

  getTags(): Observable<string[]>
  {
    return this.http.get<string[]>('https://hungnguyen--web422.herokuapp.com/api/tags');
  }

  getAllPosts():Observable<BlogPost[]>
  {
    return this.http.get<BlogPost[]>(`https://hungnguyen--web422.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`);
  }

  newPost(data: BlogPost): Observable<any>
  {
    // this function is used for post method
    return this.http.post<any>(`https://hungnguyen--web422.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>
  {
    return this.http.put<any>(`https://hungnguyen--web422.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any>
  {
    return this.http.delete<any>(`https://hungnguyen--web422.herokuapp.com/api/posts/${id}`);
  }

  
}
