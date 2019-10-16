import { TestBed } from '@angular/core/testing';

import { GaurdianService } from './gaurdian.service';

describe('GaurdianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaurdianService = TestBed.get(GaurdianService);
    expect(service).toBeTruthy();
  });
});
