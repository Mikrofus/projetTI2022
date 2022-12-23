import { TestBed } from '@angular/core/testing';

import { AuctionPaymentService } from './auction-payment.service';

describe('AuctionPaymentService', () => {
  let service: AuctionPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
