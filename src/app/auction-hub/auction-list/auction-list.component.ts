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

  x = setInterval(() => {
    let countDownDate = new Date(this.auction.timer).getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.timer = `${days}:${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
      clearInterval(this.x);
      this.timer = "Enchere finie";

    }
  });
}

