import { Component, Input, OnInit } from '@angular/core';
import { DtoInputAuction } from '../dtos/dto-input-auction';
import { AuctionService } from '../auction.service';


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent {
// On déclare un service d'enchères
  constructor(private _auctionService: AuctionService) {}

// On déclare une date de fin et une chaîne de temps restant
  deadLine: Date = new Date();
  timeRemaining: string = '';

// On déclare un tableau d'enchères en entrée
  @Input() auctions: DtoInputAuction[] = [];

// On déclare des minutes et des secondes, ainsi qu'un booléen indiquant si la pause est activée
  minutes: number = 0;
  seconds: number = 0;
  isPaused: boolean = false;
}
