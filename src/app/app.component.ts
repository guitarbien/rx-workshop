import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/zip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // onClick() {
  //   const a$: Observable<number> = Observable.from([1, 3, 5]);
  //   const b$: Observable<number> = Observable.from([2, 4, 6]);
  //
  //   const sum$: Observable<number> = Observable.zip(a$, b$, (a, b) => a + b);
  //
  //   sum$.subscribe(sum => console.log(sum));
  // }
  title: string;
  posts$: observable<Post[]> = this.postService.getPosts();

  constructor(private postService: IPostService) {
  }

  onAddPostClick() {
  }

  onReloadClick() {
  }
}
