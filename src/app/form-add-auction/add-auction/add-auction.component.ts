import { Component } from '@angular/core';
import {DtoOutputCreateAuction} from "../../auction-hub/dtos/dto-output-create-auction";
import {ServiceAddAuctionService} from "../service-add-auction.service";

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent {

  auctions: DtoOutputCreateAuction[] = [];

  constructor(private _addAuctionService : ServiceAddAuctionService) {
  }

  create(dto:DtoOutputCreateAuction){
    this._addAuctionService.create(dto).subscribe(auction=>this.auctions.push(auction));
  }
}
