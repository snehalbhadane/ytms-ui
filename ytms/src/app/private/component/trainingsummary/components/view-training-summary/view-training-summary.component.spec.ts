import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainingSummaryComponent } from './view-training-summary.component';

describe('ViewTrainingSummaryComponent', () => {
  let component: ViewTrainingSummaryComponent;
  let fixture: ComponentFixture<ViewTrainingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTrainingSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTrainingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
