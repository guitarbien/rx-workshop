import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick() {
    const a = [1, 3, 5];
    const b = [2, 4, 6];

    for (let i = 0; i < a.length; i++) {
      console.log(a[i] + b[i]);
    }
  }
}
