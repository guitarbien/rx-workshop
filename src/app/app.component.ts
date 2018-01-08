import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialCount = 2;
  counter: number = this.initialCount;

  onCounterChange(counter: number) {
    this.counter = counter;
  }
}
