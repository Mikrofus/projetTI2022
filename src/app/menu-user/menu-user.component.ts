import {Component, Input} from '@angular/core';
import {DtoInputAuction} from "../auction-hub/dtos/dto-input-auction";
import {DtoInputUser} from "../user-hub/dtos/dto-input-user";

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent {

  @Input() auctions: DtoInputAuction[] = [];
  user: DtoInputUser | null = null;

  price: number=0;
  constructor() { }
  handler:any = null;
  value: number=50;



  ngOnInit(): void {
    this.loadStripe();
  }



  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MACkeHRlgUGI60P7hhPHhOoIqRGCugVGfOSOLGZ8UFR9spKEgXlS0ywwQMH89egX68BTsxFxVRWOxgn6X2XmrQx00epEW9SEH',
      locale: 'auto',
      token: function (token: any) {
        token.id;
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

    this.price +=amount

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
