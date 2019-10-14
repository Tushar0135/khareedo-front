import { TestBed } from '@angular/core/testing';

import { ItemserviceService } from './itemservice.service';

describe('ItemserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemserviceService = TestBed.get(ItemserviceService);
    expect(service).toBeTruthy();
  });
});
