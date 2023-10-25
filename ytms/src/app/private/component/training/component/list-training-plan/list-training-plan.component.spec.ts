import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainingPlanComponent } from './list-training-plan.component';

describe('ListTrainingPlanComponent', () => {
  let component: ListTrainingPlanComponent;
  let fixture: ComponentFixture<ListTrainingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrainingPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTrainingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
