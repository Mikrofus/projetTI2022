import {Component, Input, OnInit} from '@angular/core';
import {DtoInputAuction} from "../dtos/dto-input-auction";
import {environment} from "../../../environments/environment";
import {AuctionService} from "../auction.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoAuctionTime} from "../dtos/dto-auction-time";


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']

})
export class AuctionListComponent {


  constructor(private _auctionService: AuctionService) {
  }

  deadLine: Date = new Date();
  timeRemaining: string = '';


  @Input() auctions: DtoInputAuction[] = [];



  minutes: number = 0;
  seconds: number = 0;
  isPaused: boolean = false;
}

