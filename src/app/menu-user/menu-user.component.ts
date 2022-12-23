import {Component, Input} from '@angular/core';
import {DtoInputAuction} from "../auction-hub/dtos/dto-input-auction";
import {DtoInputUser} from "../user-hub/dtos/dto-input-user";
import {UserService}from "../user-hub/user.service";
import {AuctionService} from "../auction-hub/auction.service";
import {ActivatedRoute} from "@angular/router";
import {DtoInputAuctionPayment} from "../auction-hub/dtos/dto-input-auction-payment";
import {AuctionPaymentService} from "../auction-hub/auction-payment.service";

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent {

  user: DtoInputUser | null = null;

  @Input() auctionPayment: DtoInputAuctionPayment[] = [];

  price: number=0;
  handler:any = null;
  value: number=50;

  test = AuctionPaymentService;

  constructor(private _userService: UserService, private route: ActivatedRoute, private _auctionPaymentService : AuctionPaymentService) {

  }


  ngOnInit(): void {

    this.fetchById();
    this.fetchAuctionPayment();
    this.loadStripe();
  }


  private fetchById()
  {
    this._userService.fetchById().subscribe(u => this.user = u)
  }


  private fetchAuctionPayment()
  {
    this._auctionPaymentService.fetchAll().subscribe(auction => (this.auctionPayment = auction));
  }


  pay(amount: any, id: number) {


    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MACkeHRlgUGI60P7hhPHhOoIqRGCugVGfOSOLGZ8UFR9spKEgXlS0ywwQMH89egX68BTsxFxVRWOxgn6X2XmrQx00epEW9SEH',
      locale: 'auto',
      token: function (token: any) {
        token.id;


        alert('Token Created!!');


        return token.id;

      }

    });

    this._auctionPaymentService.delete(id).subscribe(u => console.log(u));

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });


  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MACkeHRlgUGI60P7hhPHhOoIqRGCugVGfOSOLGZ8UFR9spKEgXlS0ywwQMH89egX68BTsxFxVRWOxgn6X2XmrQx00epEW9SEH',
          locale: 'auto',
          token: function (token: any) {

            console.log(token)

            alert('Payment Success!!');
          }

        });


      }


      window.document.body.appendChild(s);
    }
  }

  sendPrice() {

  }



}
