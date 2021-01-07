import { TestBed } from '@angular/core/testing';

import { BusinessunitsService } from './businessunits.service';

describe('BusinessunitsService', () => {
  let service: BusinessunitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessunitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
