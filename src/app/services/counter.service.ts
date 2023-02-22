import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter$: BehaviorSubject<number> = new BehaviorSubject(0);
  
  constructor() {  }

  incrementCounter() {
    this.counter$.next(this.counter$.getValue() + 1);
  }

  decrementCounter() {
    this.counter$.next(this.counter$.getValue() - 1);
  }

  getCounter$(): Observable<number> {
    return this.counter$.asObservable();
  }

}
