import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinationManagemenetComponent } from './coordination-managemenet.component';

describe('CoordinationManagemenetComponent', () => {
  let component: CoordinationManagemenetComponent;
  let fixture: ComponentFixture<CoordinationManagemenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinationManagemenetComponent]
    });
    fixture = TestBed.createComponent(CoordinationManagemenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
