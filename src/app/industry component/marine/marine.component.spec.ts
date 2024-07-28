import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineComponent } from './marine.component';

describe('MarineComponent', () => {
  let component: MarineComponent;
  let fixture: ComponentFixture<MarineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarineComponent]
    });
    fixture = TestBed.createComponent(MarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
