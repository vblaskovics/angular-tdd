import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  counter$: Observable<number> = new Observable();

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counter$ = this.counterService.getCounter$();
  }

  incrementCounter(): void {
    this.counterService.incrementCounter();
  }
}
