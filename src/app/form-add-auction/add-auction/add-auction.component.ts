import { Component } from '@angular/core';
import {DtoOutputCreateAuction} from "../../auction-hub/dtos/dto-output-create-auction";
import {AuctionService} from "../../auction-hub/auction.service";


@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent {

  auctions: DtoOutputCreateAuction[] = [];

  constructor(private _auctionService : AuctionService) {
  }

  create(dto:DtoOutputCreateAuction){
    this._auctionService.create(dto).subscribe(auction=>this.auctions.push(auction));
  }
}
