import { TestBed } from '@angular/core/testing';

import { ChaildService } from './chaild.service';

describe('ChaildService', () => {
  let service: ChaildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
