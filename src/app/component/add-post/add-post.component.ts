import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { IPostService } from '../../interface/ipost-service.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  title: string;
  posts$: Observable<Post[]> = this.postService.getPosts();

  constructor(private postService: IPostService) { }

  ngOnInit() {
  }

  onAddPostClick() {
    const post: Post = {
      title: this.title,
      author: '隨便'
    };

    this.postService.addPost(post);

    this.title = '';
  }
}
