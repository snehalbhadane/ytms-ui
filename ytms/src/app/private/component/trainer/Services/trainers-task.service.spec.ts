import { TestBed } from '@angular/core/testing';

import { TrainersTaskService } from './trainers-task.service';

describe('TrainersTaskService', () => {
  let service: TrainersTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainersTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
