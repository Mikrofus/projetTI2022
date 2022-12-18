import {Component, OnInit} from '@angular/core';
import {DtoInputAuction} from "./dtos/dto-input-auction";
import {AuctionService} from "./auction.service";
import {DtoOutputCreateAuction} from "./dtos/dto-output-create-auction";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-auction-hub',
  templateUrl: './auction-hub.component.html',
  styleUrls: ['./auction-hub.component.css']
})
export class AuctionHubComponent implements OnInit {
  auctions: DtoInputAuction[] = [];


  constructor(private _auctionService: AuctionService,private _route:ActivatedRoute) {
  }

  ngOnInit(): void {
  this.fetchAll();
  }

  private fetchAll() {
    this._auctionService.fetchAll().subscribe(auctions => this.auctions = auctions);
  }

  create(dto: DtoOutputCreateAuction) {
    this._auctionService.create(dto).subscribe(auction => this.auctions.push(auction));
  }

}




