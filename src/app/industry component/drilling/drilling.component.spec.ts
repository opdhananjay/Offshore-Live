import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillingComponent } from './drilling.component';

describe('DrillingComponent', () => {
  let component: DrillingComponent;
  let fixture: ComponentFixture<DrillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrillingComponent]
    });
    fixture = TestBed.createComponent(DrillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
