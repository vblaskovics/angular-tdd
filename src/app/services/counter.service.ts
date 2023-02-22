import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter:number = 0
  
  constructor() { }

  incrementCounter() {
    this.counter += 1
  }

  decrementCounter() {
    this.counter -= 1;
  }

  getCounter(): number {
    return this.counter;
  }

}
