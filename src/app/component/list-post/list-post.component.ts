import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { Observable } from 'rxjs/Observable';
import { IListPosts } from '../../interface/ilist-posts.interface';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts$: Observable<Post[]> = this.postService.posts$;

  constructor(private postService: IListPosts) { }

  ngOnInit(): void {
    this.postService.reloadPosts();
  }
}
