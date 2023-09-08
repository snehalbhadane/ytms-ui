import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTrainerProfileComponent } from './complete-trainer-profile.component';

describe('CompleteTrainerProfileComponent', () => {
  let component: CompleteTrainerProfileComponent;
  let fixture: ComponentFixture<CompleteTrainerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteTrainerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteTrainerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
