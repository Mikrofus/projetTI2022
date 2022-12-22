import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import {DtoOutputCreateAuction} from "../auction-hub/dtos/dto-output-create-auction";
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {DtoOutputUser} from "../inscription/dto-user/dto-output-user";
import {UserService} from "../user-hub/user.service";
import {DtoInputUser} from "../user-hub/dtos/dto-input-user";
import {finalize, Observable, tap} from "rxjs";



@Component({
  selector: 'app-form-add-auction',
  templateUrl: './form-add-auction.component.html',
  styleUrls: ['./form-add-auction.component.css']
})

export class FormAddAuctionComponent implements  OnInit {
  public userTest: DtoInputUser = {
    id: 0,
    pseudo: "",
    mail: "",
    pass: ""
  };

  @Output()
  AuctionCreated: EventEmitter<DtoOutputCreateAuction> = new EventEmitter<DtoOutputCreateAuction>();

  date : Date = new Date(2022,12,24,23,59,59);
  dateString : string = this.date.toISOString();
  url:any = "";



  form: FormGroup = this._fb.group({
    title: this._fb.control('', Validators.required),
    descri: this._fb.control('', [Validators.required,Validators.minLength(5)]),
    category:this._fb.control ('',Validators.required),
    img: this._fb.control('',Validators.required),
    price:this._fb.control(0,[Validators.required, Validators.min(0)]),
    idUserBid:this._fb.control(''),
    timer : this._fb.control('')
  });

  constructor(private _fb: FormBuilder, private _userService: UserService) {


  }

  ngOnInit(): void {

    this._userService.fetchById()
      .subscribe(u => this.userTest = u);



  }



  emitAuctionCreated() {
    this.AuctionCreated.next({
      idUser: 1,
      title: this.form.value.title,
      category: this.form.value.category,
      descri: this.form.value.descri,
      img: this.url,
      price: this.form.value.price,
      idUserBid : this.userTest.id,
      timer: this.form.value.timer
    });

    console.log(this.userTest)
   


    // this.form.reset();
  }

  private fetchById() {
    this._userService.fetchById().subscribe(u => this.userTest = u);



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


  selectFile(event:any) {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.url = reader.result as string;
      this.url = this.url.replace('data:image/jpeg;base64,', '');
      // Use the file path as needed
    };

    reader.readAsDataURL(file);

    // let reader = new FileReader();
    //
    // reader.readAsDataURL(event.target.files[0]);
    // reader.onload= (_event) =>{
    //   this.url = reader;
    // }
    //
    //
    // console.log(this.url)
  }


}
