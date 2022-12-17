import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DtoInputAuction} from "../auction-hub/dtos/dto-input-auction";
import {AuctionService} from "../auction-hub/auction.service";


@Component({
  selector: 'app-menu-auction',
  templateUrl: './menu-auction.component.html',
  styleUrls: ['./menu-auction.component.css']
})
export class MenuAuctionComponent implements OnInit{

  auction: DtoInputAuction | null = null;
  found: boolean = false;

  constructor(private _auctionService: AuctionService,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

}
