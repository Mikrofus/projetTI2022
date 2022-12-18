import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import {DtoOutputCreateAuction} from "../auction-hub/dtos/dto-output-create-auction";
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {ServiceAddAuctionService} from "./service-add-auction.service";


@Component({
  selector: 'app-form-add-auction',
  templateUrl: './form-add-auction.component.html',
  styleUrls: ['./form-add-auction.component.css']
})
export class FormAddAuctionComponent implements  OnInit {

  auctions: DtoOutputCreateAuction[] = [];

  @Output()
  AuctionCreated: EventEmitter<DtoOutputCreateAuction> = new EventEmitter<DtoOutputCreateAuction>();

  form: FormGroup = this._fb.group({
    title: this._fb.control('', Validators.required),
    descri: this._fb.control('', [Validators.required,Validators.minLength(5)]),
    category:this._fb.control ('',Validators.required),
    img: this._fb.control('',Validators.required),
    price:this._fb.control(0,[Validators.required, Validators.min(0)]),
    timer : this._fb.control('24:00')
  });

  ngOnInit(): void {
  }

  constructor(private _fb: FormBuilder, private _addAuctionService : ServiceAddAuctionService) {

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

  create(dto:DtoOutputCreateAuction){
    this._addAuctionService.create(dto).subscribe(auction=>this.auctions.push(auction));
  }



}
