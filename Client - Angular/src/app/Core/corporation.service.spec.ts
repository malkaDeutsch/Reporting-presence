import { TestBed } from '@angular/core/testing';

import { CorporationService } from './corporation.service';

describe('CorporationService', () => {
  let service: CorporationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
