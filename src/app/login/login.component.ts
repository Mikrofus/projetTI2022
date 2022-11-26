import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin1: FormGroup = this._fb.group({
    login:this._fb.control("",Validators.required),
    password:this._fb.control("",Validators.required)
    }
  );

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
  }

  get loginControl(){
    return this.formLogin1.controls['login'];
  }
  get passwordControl(){
    return this.formLogin1.controls['password'];
  }


  connect() {
    console.log(this.formLogin1.value);
  }
}
