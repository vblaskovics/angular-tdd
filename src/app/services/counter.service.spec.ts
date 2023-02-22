import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide a counter value', () => {
    expect(service.getCounter()).toBeDefined();
  })

  it('should be able to increment a counter value', () => {
    let counterValue = service.getCounter()
    service.incrementCounter();
    expect(service.getCounter()).toBe(counterValue + 1);
  })

  it('should be able ro decrease a counter value', () => {
    let counterValue = service.getCounter()
    service.decrementCounter();
    expect(service.getCounter()).toBe(counterValue - 1);
  })
});
