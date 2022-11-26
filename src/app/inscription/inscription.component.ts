import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  formSignIn1: FormGroup = this._fb.group({
    pseudo:this._fb.control("",[Validators.required,Validators.minLength(3)]),
    mail:this._fb.control("",[Validators.required, Validators.email]),
    password:this._fb.control("",[Validators.required,Validators.minLength(6)])
  })

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
  }

  SignIn() {
  }

  get pseudoControl(){
    return this.formSignIn1.controls['pseudo'];
  }
  get mailControl(){
    return this.formSignIn1.controls['mail'];
  }
  get passwordControl(){
    return this.formSignIn1.controls['password'];
  }
}
