import { Component } from '@angular/core';
import {AuctionPaymentService} from "../../auction-payment.service";
import {DtoOutputCreateAuctionPayment} from "../../dtos/dto-output-create-auction-payment";

@Component({
  selector: 'app-add-auction-payment',
  templateUrl: './add-auction-payment.component.html',
  styleUrls: ['./add-auction-payment.component.css']
})
export class AddAuctionPaymentComponent {

  auctionsPayment : DtoOutputCreateAuctionPayment[] = [];
  constructor(private _auctionPaymentService : AuctionPaymentService) {
  }

  create(dto:DtoOutputCreateAuctionPayment){
    this._auctionPaymentService.create(dto).subscribe(auction=>this.auctionsPayment.push(auction));
  }

}
