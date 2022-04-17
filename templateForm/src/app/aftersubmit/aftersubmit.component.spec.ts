import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftersubmitComponent } from './aftersubmit.component';

describe('AftersubmitComponent', () => {
  let component: AftersubmitComponent;
  let fixture: ComponentFixture<AftersubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftersubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AftersubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
