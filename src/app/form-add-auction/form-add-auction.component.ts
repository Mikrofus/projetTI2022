import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import {DtoOutputCreateAuction} from "../auction-hub/dtos/dto-output-create-auction";
import {FormBuilder,FormGroup,Validators} from "@angular/forms";


@Component({
  selector: 'app-form-add-auction',
  templateUrl: './form-add-auction.component.html',
  styleUrls: ['./form-add-auction.component.css']
})
export class FormAddAuctionComponent implements  OnInit {



  @Output()
  AuctionCreated: EventEmitter<DtoOutputCreateAuction> = new EventEmitter<DtoOutputCreateAuction>();

  form: FormGroup = this._fb.group({
    title: this._fb.control('', Validators.required),
    descri: this._fb.control('', [Validators.required,Validators.minLength(5)]),
    category:this._fb.control ('',Validators.required),
    img: this._fb.control('',Validators.required),
    price:this._fb.control(0,[Validators.required, Validators.min(0)]),
    idUserBid:this._fb.control('1'),
    timer : this._fb.control('24:00')
  });

  ngOnInit(): void {
  }

  constructor(private _fb: FormBuilder) {

  }

  emitAuctionCreated() {
    this.AuctionCreated.next({
      id_user: 1,
      title: this.form.value.title,
      category: this.form.value.category,
      descri: this.form.value.descri,
      img: this.form.value.img,
      price: this.form.value.price,
      idUserBid : this.form.value.idUserBid,
      timer: this.form.value.timer
    });
    // this.form.reset();
  }

  get titleControl(){
    return this.form.controls['title'];
  }

  get descriControl(){
    return this.form.controls['descri'];
  }

  get categoryControl(){
    return this.form.controls['category'];
  }

  get imgControl(){
    return this.form.controls['img'];
  }

  get priceControl(){
    return this.form.controls['price'];
  }

  get timerControl(){
    return this.form.controls['timer'];
  }

  get idUserBid(){
    return this.form.controls['idUserBid'];
  }

  resetForm(){
    this.form.reset();
  }




}
