import { TestBed } from '@angular/core/testing';

import { TeacherToKindergardenService } from './teacher-to-kindergarden.service';

describe('TeacherToKindergardenService', () => {
  let service: TeacherToKindergardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherToKindergardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
