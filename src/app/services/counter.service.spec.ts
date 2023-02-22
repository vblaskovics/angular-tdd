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

  it('should provide a counter stream', () => {
    expect(service.getCounter$()).toBeDefined();
  })

  xit('should be able to increment a counter value', () => {
    let counter$ = service.getCounter$()
    // expect(counter$.getValue()).toBe(0);
    // service.incrementCounter();
    // expect(counter$.getValue()).toBe(1);

    counter$.subscribe((value) => {
      expect(value).toBe(0);
    });
    service.incrementCounter();
  })

  // it('should be able ro decrease a counter value', () => {
  //   let counter$ = service.getCounter$()
  //   expect(counter$.getValue()).toBe(0);
  //   service.decrementCounter();
  //   expect(counter$.getValue()).toBe(-1);
  // })
});
