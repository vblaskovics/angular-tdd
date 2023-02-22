import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';
import { TestScheduler } from 'rxjs/testing';
import { ReplaySubject } from 'rxjs';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

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
  });

  xit('should be able to increment a counter value', () => {
    let counter$ = service.getCounter$();
    let callCount = 0;

    counter$.subscribe((value) => {
      switch (callCount) {
        case 0:
          expect(value).toBe(0);
          break;
        case 1:
          expect(value).toBe(1);
          break;
        default:
          fail('Unexpected call count');
      }
      callCount++;
    });
    service.incrementCounter();
  });

  it('should be able to increment a counter value', () => {
    let counter$ = service.getCounter$();
    let replaySubject$ = new ReplaySubject<number>();
    counter$.subscribe(replaySubject$);
    service.incrementCounter();
    service.incrementCounter();
    service.incrementCounter();

    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;
      expectObservable(replaySubject$).toBe('(abcd)', { a: 0, b: 10, c: 2, d: 3 });
    });
  });

  // it('should be able ro decrease a counter value', () => {
  //   let counter$ = service.getCounter$()
  //   expect(counter$.getValue()).toBe(0);
  //   service.decrementCounter();
  //   expect(counter$.getValue()).toBe(-1);
  // })
});
