import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookupComponent } from './hookup.component';

describe('HookupComponent', () => {
  let component: HookupComponent;
  let fixture: ComponentFixture<HookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HookupComponent]
    });
    fixture = TestBed.createComponent(HookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
