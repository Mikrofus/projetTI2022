import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuctionService} from "../auction.service";
import {DtoInputAuction} from "../dtos/dto-input-auction";
import {DtoOutputCreateAuction} from "../dtos/dto-output-create-auction";
import {DtoOutputPatchAuction} from "../dtos/dto-output-patch-auction";
import {UserService} from "../../user-hub/user.service";
import {DtoInputUser} from "../../user-hub/dtos/dto-input-user";


@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent {
  auction: any;
  public user: DtoInputUser = {
    id: 0,
    pseudo: "",
    mail: "",
    pass: ""
  };

  price: number = 0;
  auctionPatch: DtoOutputPatchAuction = {id: 0, price: 0, idUserBid: 1}

  constructor(private service: AuctionService, private route: ActivatedRoute, private _userService: UserService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(args => {
      if (args.has("auctionId")) {
        const auctionId = Number(args.get("auctionId"));
        this.fetchAuctionData(auctionId);
        this.auctionPatch.id = auctionId;
      }

    });

    this._userService.fetchById()
      .subscribe(u => this.user = u);


  }

  fetchAuctionData(id: number) {
    this.service.fetchById(id).subscribe(auction => this.auction = auction);

  }

  updateAuction(dto: DtoOutputPatchAuction) {

    this.service.update(dto).subscribe(auction => console.log(auction));

  }




  updateAuctionClick(dto: DtoOutputPatchAuction) {
    dto.price = this.price;
    dto.idUserBid = this.user.id;
    console.log(dto.idUserBid);
    this.updateAuction(dto);
    this.fetchAuctionData(dto.id);
  }


  updatePrice(price: number) {
    this.price = price;
  }

  countDownDate = new Date("Dec 23, 2022 23:59:59").getTime();
  demo: any;

  x = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.demo = `${days}:${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
      clearInterval(this.x);
      this.demo = "EXPIRED";
    }
  });
}
