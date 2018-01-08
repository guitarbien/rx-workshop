import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CounterInterface } from '../interface/change-counter.interface';

@Injectable()
export class CounterService implements CounterInterface {
  private store$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counter$: Observable<number> = this.store$;

  setInitialCount(initialCount: number) {
    this.store$.next(initialCount);
  }

  addOne(): void {
    this.store$.next(this.store$.getValue() + 1);
  }

  minusOne(): void {
    this.store$.next(this.store$.getValue() - 1);
  }
}
