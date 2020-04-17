import { TestBed } from '@angular/core/testing';

import { SurveyCreateService } from './survey-create.service';

describe('SurveyCreateService', () => {
  let service: SurveyCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
