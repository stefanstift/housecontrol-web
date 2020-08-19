import { TestBed } from '@angular/core/testing';

import { JalousieService } from './jalousie.service';

describe('JalousieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JalousieService = TestBed.get(JalousieService);
    expect(service).toBeTruthy();
  });
});
