import { TestBed } from '@angular/core/testing';

import { TrainerprofileService } from './trainerprofile.service';

describe('TrainerprofileService', () => {
  let service: TrainerprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
