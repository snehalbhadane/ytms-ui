import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPerformanceReportComponent } from './training-performance-report.component';

describe('TrainingPerformanceReportComponent', () => {
  let component: TrainingPerformanceReportComponent;
  let fixture: ComponentFixture<TrainingPerformanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPerformanceReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPerformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
