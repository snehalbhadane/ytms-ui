import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetrainingsummaryComponent } from './updatetrainingsummary.component';

describe('UpdatetrainingsummaryComponent', () => {
  let component: UpdatetrainingsummaryComponent;
  let fixture: ComponentFixture<UpdatetrainingsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetrainingsummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetrainingsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
