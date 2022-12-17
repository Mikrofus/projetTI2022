import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuctionService} from "../auction.service";
import {DtoInputAuction} from "../dtos/dto-input-auction";

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent {
  auction: DtoInputAuction | null = null;

  constructor(private service: AuctionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(args => {
      if (args.has("auctionId")) {
        const auctionId = Number(args.get("auctionId"));
        this.fetchAuctionData(auctionId);
      }

    });
  }

  fetchAuctionData(id: number) {
    this.service.fetchById(id).subscribe(auction => this.auction = auction);
  }





}
