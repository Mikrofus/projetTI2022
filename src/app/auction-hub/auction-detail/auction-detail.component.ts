import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuctionService} from "../auction.service";
import {DtoInputAuction} from "../dtos/dto-input-auction";
import {DtoOutputCreateAuction} from "../dtos/dto-output-create-auction";
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
    this.price = price;
  }
}
