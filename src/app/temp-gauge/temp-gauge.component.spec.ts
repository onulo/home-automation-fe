import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempGaugeComponent } from './temp-gauge.component';

describe('TempGaugeComponent', () => {
  let component: TempGaugeComponent;
  let fixture: ComponentFixture<TempGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
