import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

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

  constructor(private fb:FormBuilder) { }

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
}
