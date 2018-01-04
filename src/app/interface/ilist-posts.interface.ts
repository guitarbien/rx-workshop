import { Post } from '../model/post.model';
import { Observable } from 'rxjs/Observable';

export abstract class IListPosts {
  readonly posts$: Observable<Post[]>;
  abstract reloadPosts(): void;
}
