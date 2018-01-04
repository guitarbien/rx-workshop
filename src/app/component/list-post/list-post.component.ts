import { Component } from '@angular/core';
import { Post } from '../../model/post.model';
import { Observable } from 'rxjs/Observable';
import { IPostService } from '../../interface/ipost-service.interface';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  posts$: Observable<Post[]> = this.postService.getPosts();

  constructor(private postService: IPostService) { }
}
