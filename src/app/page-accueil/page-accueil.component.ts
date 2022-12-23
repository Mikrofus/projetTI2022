import {Component, NgModule, OnInit} from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Routes, RouterModule} from "@angular/router";
import { LoginComponent} from "../login/login.component";
import {LoginService} from "../login/login.service";
import {UserService} from "../user-hub/user.service";



@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})

export class PageAccueilComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faUserPlus = faUserPlus;
  faUser = faUser;
  isConnected: boolean = false;

  constructor(private _loginService : LoginService, private _userService : UserService) { }

  ngOnInit(): void {
      this.fetchById();
  }


  private fetchById()
  {
    this._userService.fetchById().subscribe(u => this.isConnected = true)
  }




}
