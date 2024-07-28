import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentAlertComponent } from './recruitment-alert.component';

describe('RecruitmentAlertComponent', () => {
  let component: RecruitmentAlertComponent;
  let fixture: ComponentFixture<RecruitmentAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitmentAlertComponent]
    });
    fixture = TestBed.createComponent(RecruitmentAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
