import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertHoverDetail } from './alert-hover-detail';

describe('AlertHoverDetail', () => {
  let component: AlertHoverDetail;
  let fixture: ComponentFixture<AlertHoverDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertHoverDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertHoverDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
