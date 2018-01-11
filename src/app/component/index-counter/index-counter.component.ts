import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-index-counter',
  templateUrl: './index-counter.component.html',
  styleUrls: ['./index-counter.component.css']
})
export class IndexCounterComponent {
  initialCount = 2;
  counter$: Observable<number> = this.counterService.counter$;

  constructor(private counterService: CounterService) { }
}
