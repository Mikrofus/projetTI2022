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
    title: ['', Validators.required],
    descri: ['', Validators.required],
    category: ['',Validators.required],
    img: ['',Validators.required],
    price: [0,[Validators.required, Validators.min(1)]],
    timer: ['',Validators.required]
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
      timer: this.form.value.timer
    });
    this.form.reset();
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

  resetForm(){
    this.form.reset();
  }



}
