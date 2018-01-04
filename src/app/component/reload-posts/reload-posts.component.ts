import { Component } from '@angular/core';
import { Post } from '../../model/post.model';
import { IPostService } from '../../interface/ipost-service.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reload-posts',
  templateUrl: './reload-posts.component.html',
  styleUrls: ['./reload-posts.component.css']
})
export class ReloadPostsComponent {
  posts$: Observable<Post[]> = this.postService.getPosts();

  constructor(private postService: IPostService) { }

  onReloadClick() {
    this.posts$ = this.postService.getPosts();
  }
}
