import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-form-add-auction',
  templateUrl: './form-add-auction.component.html',
  styleUrls: ['./form-add-auction.component.css']
})
export class FormAddAuctionComponent {

  onFormSubmit(auctionForm:NgForm){
    console.log(auctionForm);
  }

  resetForm(auctionForm:NgForm){
    auctionForm.resetForm();
  }

}
