import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2ServicesComponent } from './home2-services.component';

describe('Home2ServicesComponent', () => {
  let component: Home2ServicesComponent;
  let fixture: ComponentFixture<Home2ServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Home2ServicesComponent]
    });
    fixture = TestBed.createComponent(Home2ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
