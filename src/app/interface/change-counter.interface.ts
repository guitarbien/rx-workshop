import { Observable } from 'rxjs/Observable';

export abstract class CounterInterface {
  abstract counter$: Observable<number>;
  abstract setInitialCount(initialValue: number);
  abstract addOne(): void;
  abstract minusOne(): void;
}
