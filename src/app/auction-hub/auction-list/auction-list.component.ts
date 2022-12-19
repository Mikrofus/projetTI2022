import {Component, Input, OnInit} from '@angular/core';
import {DtoInputAuction} from "../dtos/dto-input-auction";

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent{
  @Input() auctions: DtoInputAuction[] = [];

  minutes: number = 0;
  seconds: number = 0;
  isPaused: boolean = false;

}
