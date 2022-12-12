import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoOutputUser} from "./dto-user/dto-output-user";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  @Output()
  userCreated: EventEmitter<DtoOutputUser> = new EventEmitter<DtoOutputUser>();

  formSignIn1: FormGroup = this._fb.group({
    pseudo:this._fb.control("",[Validators.required,Validators.minLength(3)]),
    mail:this._fb.control("",[Validators.required, Validators.email]),
    password:this._fb.control("",[Validators.required,Validators.minLength(6)])
  })

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
  }

  signIn() {
    this.userCreated.next({
      pseudo: this.formSignIn1.value.pseudo,
      mail: this.formSignIn1.value.mail,
      pass: this.formSignIn1.value.password
    });
    this.formSignIn1.reset();
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
