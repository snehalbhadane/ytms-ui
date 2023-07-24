import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrassociatedetailsComponent } from './ctrassociatedetails.component';

describe('CtrassociatedetailsComponent', () => {
  let component: CtrassociatedetailsComponent;
  let fixture: ComponentFixture<CtrassociatedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrassociatedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtrassociatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
