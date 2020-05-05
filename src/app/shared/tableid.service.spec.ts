import { TestBed } from '@angular/core/testing';

import { TableidService } from './service/tableid.service';

describe('TableidService', () => {
  let service: TableidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
