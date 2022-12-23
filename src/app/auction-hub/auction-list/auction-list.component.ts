import {Component, Input} from '@angular/core';
import {DtoInputAuction} from "../dtos/dto-input-auction";
import {AuctionService} from "../auction.service";


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']

})
export class AuctionListComponent {


  constructor(private _auctionService: AuctionService) {
  }

  timer: any;
  auction: any;

  @Input() auctions: DtoInputAuction[] = [];



  minutes: number = 0;
  seconds: number = 0;
  isPaused: boolean = false;


}

