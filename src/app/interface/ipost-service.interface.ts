import {Post} from '../model/post.model';
import {Observable} from 'rxjs/Observable';

export abstract class IPostService {
  abstract getPosts(): Observable<Post[]>;
  abstract addPost(post: Post): void;
}
