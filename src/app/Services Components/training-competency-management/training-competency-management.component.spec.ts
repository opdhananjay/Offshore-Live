import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCompetencyManagementComponent } from './training-competency-management.component';

describe('TrainingCompetencyManagementComponent', () => {
  let component: TrainingCompetencyManagementComponent;
  let fixture: ComponentFixture<TrainingCompetencyManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingCompetencyManagementComponent]
    });
    fixture = TestBed.createComponent(TrainingCompetencyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
