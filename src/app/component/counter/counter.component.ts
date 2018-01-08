import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  private counter: number;

  ngOnInit() {
  onIncrementClick() {
    this.counter++;
  }
  onDecrementClick() {
    this.counter--;
  }
}
