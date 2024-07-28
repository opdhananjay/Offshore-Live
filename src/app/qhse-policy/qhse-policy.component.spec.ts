import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QhsePolicyComponent } from './qhse-policy.component';

describe('QhsePolicyComponent', () => {
  let component: QhsePolicyComponent;
  let fixture: ComponentFixture<QhsePolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QhsePolicyComponent]
    });
    fixture = TestBed.createComponent(QhsePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
