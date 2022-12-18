import { TestBed } from '@angular/core/testing';

import { ServiceAddAuctionService } from './service-add-auction.service';

describe('ServiceAddAuctionService', () => {
  let service: ServiceAddAuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAddAuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
