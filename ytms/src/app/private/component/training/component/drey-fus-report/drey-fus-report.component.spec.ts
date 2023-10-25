import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreyFusReportComponent } from './drey-fus-report.component';

describe('DreyFusReportComponent', () => {
  let component: DreyFusReportComponent;
  let fixture: ComponentFixture<DreyFusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreyFusReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreyFusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
