import { Injectable } from '@angular/core';
import {IPostService} from '../../interface/ipost-service.interface';
import {Post} from '../../model/post.model';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IAddPost } from '../../interface/iadd-post.interface';
import { IListPosts } from '../../interface/ilist-posts.interface';
import { IShowCount } from '../../interface/ishow-count.interface';
import { IReloadPosts } from '../../interface/ireload-posts.interface';

@Injectable()
export class PostService implements IAddPost, IListPosts, IShowCount, IReloadPosts {

  posts$: Observable<Post[]>;

  constructor(private httpClient: HttpClient) { }

  addPost(post: Post): void {
    this.httpClient
        .post<Post>('api/posts', post)
        .subscribe();
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('api/posts');
  }

  reloadPosts(): void {
  }
}
