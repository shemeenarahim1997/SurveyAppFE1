import { TestBed } from '@angular/core/testing';

import { ViewlistService } from './services/viewlist.service';

describe('ViewlistService', () => {
  let service: ViewlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
