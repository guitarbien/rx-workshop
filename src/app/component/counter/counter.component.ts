import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() initialCount;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  private counter: number;

  ngOnInit() {
    this.counter = this.initialCount;
  }

  onIncrementClick() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  onDecrementClick() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }
}
