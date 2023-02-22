import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should present the counter value', () => {
    const componentElement: HTMLElement = fixture.nativeElement;
    const counterElement: HTMLElement = componentElement.querySelector('[data-test="counterValue"]')!
    const counterValue:number = component.counter
    expect(counterElement.textContent).toEqual(`${counterValue}`)
  })

  it('should render the current counter value in the service', () => {

  })

  it('should be able to increment the counter value', () => {
    const incrementCtrl = fixture.nativeElement.querySelector('[data-test="counterIncrementCtrl"]')
    const counterElement: HTMLElement = fixture.nativeElement.querySelector('[data-test="counterValue"]')!
    incrementCtrl.click();
    fixture.detectChanges();

    expect(counterElement.textContent).toEqual('1')
  })
});
