import {Component, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionService } from '../auction.service';
import { DtoOutputPatchAuction } from '../dtos/dto-output-patch-auction';
import { UserService } from '../../user-hub/user.service';
import { DtoInputUser } from '../../user-hub/dtos/dto-input-user';
import {DtoOutputUser} from "../../inscription/dto-user/dto-output-user";
import {DtoOutputCreateAuctionPayment} from "../dtos/dto-output-create-auction-payment";

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent {
  @Output()
  AuctionPaymentCreate: EventEmitter<DtoOutputCreateAuctionPayment> = new EventEmitter<DtoOutputCreateAuctionPayment>();
  auction: any;
  public user: DtoInputUser = {
    id: 0,
    pseudo: '',
    mail: '',
    pass: ''
  };

  price = 0;
  auctionPatch: DtoOutputPatchAuction = { id: 0, price: 0, idUserBid: 1 };
  timer: any;
  status: string="EnCours";



  constructor(
    private auctionService: AuctionService,
    private route: ActivatedRoute,
    private userService: UserService,

  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((args) => {
      if (args.has('auctionId')) {
        const auctionId = Number(args.get('auctionId'));
        this.fetchAuctionData(auctionId);
        this.auctionPatch.id = auctionId;
      }
    });

    this.userService.fetchById().subscribe((u) => (this.user = u));
  }

  // Fonction pour récupérer les données de l'enchère en fonction de son ID
  fetchAuctionData(id: number) {
    this.auctionService.fetchById(id).subscribe((auction) => (this.auction = auction));
  }

  updateAuction(dto: DtoOutputPatchAuction) {
    this.auctionService.update(dto).subscribe((auction) => console.log(auction));
  }

  // Fonction déclenchée lors du clic sur le bouton "Mettre à jour l'enchère"
  updateAuctionClick(dto: DtoOutputPatchAuction) {
    dto.price = this.price;
    dto.idUserBid = this.user.id;
    console.log(dto.idUserBid);
    this.updateAuction(dto);
    this.fetchAuctionData(dto.id);
  }

  // Fonction pour mettre à jour le prix de l'enchère si celui-ci est supérieur au prix actuel
  updatePrice(price: number) {
    if (price > this.auction.price) this.price = price;
  }

  createAuctionPayment() {
    this.AuctionPaymentCreate.next({
      idUser: this.auction.idUserBid,
      title: this.auction.title,
      price: this.auction.price
    });
    console.log("Test create : "+this.AuctionPaymentCreate)
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

      this.timer = "EXPIRED";
      console.log(this.auctionPatch.id)
      this.createAuctionPayment();
      this.auctionService.delete(this.auctionPatch.id).subscribe(auction => console.log(auction), err=> console.log(err));
      clearInterval(this.x);
    }
  });
}
