import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {DtoOutputUser} from "../inscription/dto-user/dto-output-user";
import {InscriptionService} from "../inscription/inscription.service";

@Component({
  selector: 'app-page-daccueil',
  templateUrl: './page-daccueil.component.html',
  styleUrls: ['./page-daccueil.component.css']
})
export class PageDaccueilComponent implements OnInit {
  superform1: FormGroup = this.fb.group({
    login:this.fb.control("",Validators.required),
    password:this.fb.control("",Validators.required)
  });

  users : DtoOutputUser[] = [];
  constructor(private fb:FormBuilder, private _inscriptionService: InscriptionService) { }

  ngOnInit(): void {
  }

  get loginControl(){
    return this.superform1.controls['login'];
  }
  get passwordControl(){
    return this.superform1.controls['password'];
  }

  connect() {

  }

  create(dto: DtoOutputUser) {
    this._inscriptionService.create(dto).subscribe(user => this.users.push(user));
  }
}
