import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainingPlanComponent } from './update-training-plan.component';

describe('UpdateTrainingPlanComponent', () => {
  let component: UpdateTrainingPlanComponent;
  let fixture: ComponentFixture<UpdateTrainingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrainingPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrainingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
