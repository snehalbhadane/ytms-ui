import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsTrainingSummaryComponent } from './view-details-training-summary.component';

describe('ViewDetailsTrainingSummaryComponent', () => {
  let component: ViewDetailsTrainingSummaryComponent;
  let fixture: ComponentFixture<ViewDetailsTrainingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsTrainingSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailsTrainingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
