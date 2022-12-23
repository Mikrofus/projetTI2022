import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {DtoLoginUser} from "./dto-user/dto-login-user";
import {DtoOutputUser} from "../inscription/dto-user/dto-output-user";
import {UserService} from "../user-hub/user.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output()
  userLogin: EventEmitter<DtoLoginUser> = new EventEmitter<DtoLoginUser>();
  dto: any;
  userTest: any;
  formLogin1: FormGroup = this._fb.group({
    login:this._fb.control("",Validators.required),
    password:this._fb.control("",Validators.required)
    }
  );

  constructor(private _fb : FormBuilder, private _loginService: LoginService, private _userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get loginControl(){
    return this.formLogin1.controls['login'];
  }
  get passwordControl(){
    return this.formLogin1.controls['password'];
  }


  login() {

      this.dto = {
        mail: this.formLogin1.value.login,
        password: this.formLogin1.value.password
      }
      console.log(this.dto)

      this._loginService.login(this.dto).subscribe();

      this.router.navigate([''])

      //
      // this._userService.fetchById().subscribe(user => this.userTest = user)
      // console.log(this.userTest)
  }
}
