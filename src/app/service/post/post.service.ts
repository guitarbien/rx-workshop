import { Injectable } from '@angular/core';
import { Post } from '../../model/post.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IAddPost } from '../../interface/iadd-post.interface';
import { IListPosts } from '../../interface/ilist-posts.interface';
import { IShowCount } from '../../interface/ishow-count.interface';
import { IReloadPosts } from '../../interface/ireload-posts.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PostService implements IAddPost, IListPosts, IShowCount, IReloadPosts {
  private store$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  // readonly posts$: Observable<Post[]> = this.store$.asObservable();
  readonly posts$: Observable<Post[]> = this.store$;

  constructor(private httpClient: HttpClient) { }

  addPost(post: Post): void {
    // 對 api 新增資料
    this.httpClient
        .post<Post>('api/posts', post)
        .subscribe();

    // 對給內部共用的變數新增資料
    this.store$.next([...this.store$.getValue(), post]);
  }

  reloadPosts(): void {
    this.httpClient
      .get<Post[]>('api/posts')
      .subscribe(posts => this.store$.next(posts));
  }
}
