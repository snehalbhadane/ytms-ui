import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingSummaryComponent } from './add-training-summary.component';

describe('AddTrainingSummaryComponent', () => {
  let component: AddTrainingSummaryComponent;
  let fixture: ComponentFixture<AddTrainingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainingSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrainingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
