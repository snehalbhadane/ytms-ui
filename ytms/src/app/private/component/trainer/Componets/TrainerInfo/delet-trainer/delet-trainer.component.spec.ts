import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletTrainerComponent } from './delet-trainer.component';

describe('DeletTrainerComponent', () => {
  let component: DeletTrainerComponent;
  let fixture: ComponentFixture<DeletTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
