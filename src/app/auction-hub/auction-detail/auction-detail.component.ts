import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuctionService} from "../auction.service";
import {DtoOutputPatchAuction} from "../dtos/dto-output-patch-auction";


@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent {
  auction: any;
  price: number = 0;
  auctionPatch: DtoOutputPatchAuction = {id: 0, price: 0, idUserBid: 1}
  timer: any;

  constructor(private service: AuctionService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(args => {
      if (args.has("auctionId")) {
        const auctionId = Number(args.get("auctionId"));
        this.fetchAuctionData(auctionId);
        this.auctionPatch.id = auctionId;
      }

    });
  }

  fetchAuctionData(id: number) {
    this.service.fetchById(id).subscribe(auction => this.auction = auction);
  }

  updateAuction(dto: DtoOutputPatchAuction) {

    this.service.update(dto).subscribe(auction => console.log(auction));

  }


  updateAuctionClick(dto: DtoOutputPatchAuction) {
    dto.price = this.price;
    this.updateAuction(dto);
    this.fetchAuctionData(dto.id);
  }


  updatePrice(price: number) {
    if(price > this.auction.price)
      this.price = price;
  }




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
      this.timer = "EXPIRED";
    }
  });
}
