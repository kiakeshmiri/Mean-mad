import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {

  }

  getPostUpdateListener() {
    this.http.get<Post[]>('/api/posts').subscribe((posts: Post[]) => {
      this.postsUpdated.next(posts);
    });
    return this.postsUpdated;
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.http.post('/api/posts', post).subscribe((posts: Post[]) => {
      this.postsUpdated.next(posts);
    });
  }
}
