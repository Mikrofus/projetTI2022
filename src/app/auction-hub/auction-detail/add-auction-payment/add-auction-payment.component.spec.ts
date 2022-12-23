import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuctionPaymentComponent } from './add-auction-payment.component';

describe('AddAuctionPaymentComponent', () => {
  let component: AddAuctionPaymentComponent;
  let fixture: ComponentFixture<AddAuctionPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAuctionPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAuctionPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
