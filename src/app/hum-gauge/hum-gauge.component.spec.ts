import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumGaugeComponent } from './hum-gauge.component';

describe('HumGaugeComponent', () => {
  let component: HumGaugeComponent;
  let fixture: ComponentFixture<HumGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
