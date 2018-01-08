import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterInterface } from '../../interface/change-counter.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() initialCount;
  counter$: Observable<number> = this.counterService.counter$;

  constructor(private counterService: CounterInterface) {
  }

  ngOnInit() {
    this.counterService.setInitialCount(this.initialCount);
  }

  onIncrementClick() {
    this.counterService.addOne();
  }

  onDecrementClick() {
    this.counterService.minusOne();
  }
}
