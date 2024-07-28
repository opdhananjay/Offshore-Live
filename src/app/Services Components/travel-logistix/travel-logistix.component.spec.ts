import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLogistixComponent } from './travel-logistix.component';

describe('TravelLogistixComponent', () => {
  let component: TravelLogistixComponent;
  let fixture: ComponentFixture<TravelLogistixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelLogistixComponent]
    });
    fixture = TestBed.createComponent(TravelLogistixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
