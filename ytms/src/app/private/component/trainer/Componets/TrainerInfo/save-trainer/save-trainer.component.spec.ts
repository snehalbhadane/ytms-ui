import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTrainerComponent } from './save-trainer.component';

describe('SaveTrainerComponent', () => {
  let component: SaveTrainerComponent;
  let fixture: ComponentFixture<SaveTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
