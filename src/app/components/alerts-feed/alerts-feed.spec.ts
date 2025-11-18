import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsFeed } from './alerts-feed';

describe('AlertsFeed', () => {
  let component: AlertsFeed;
  let fixture: ComponentFixture<AlertsFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsFeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsFeed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
