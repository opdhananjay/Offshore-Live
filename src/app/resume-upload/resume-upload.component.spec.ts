import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeUploadComponent } from './resume-upload.component';

describe('ResumeUploadComponent', () => {
  let component: ResumeUploadComponent;
  let fixture: ComponentFixture<ResumeUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeUploadComponent]
    });
    fixture = TestBed.createComponent(ResumeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
