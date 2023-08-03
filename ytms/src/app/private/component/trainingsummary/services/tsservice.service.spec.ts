import { TestBed } from '@angular/core/testing';

import { TSserviceService } from './tsservice.service';

describe('TSserviceService', () => {
  let service: TSserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TSserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
