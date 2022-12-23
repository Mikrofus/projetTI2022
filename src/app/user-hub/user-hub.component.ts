import { Component,OnInit } from '@angular/core';
import {DtoInputUser} from "./dtos/dto-input-user";
import {UserService} from "./user.service";
import {ActivatedRoute} from "@angular/router";
import {DtoOutputCreateUser} from "./dtos/dto-output-user";

@Component({
  selector: 'app-user-hub',
  templateUrl: './user-hub.component.html',
  styleUrls: ['./user-hub.component.css']
})
export class UserHubComponent implements OnInit{
  users: DtoInputUser[] = [];

  constructor(private _userService: UserService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() : void{
    this.fetchAll();
  }

  private fetchAll(){
    this._userService
      .fetchAll()
      .subscribe(users=>this.users = users);
  }

  create(dto : DtoOutputCreateUser){
    this._userService.create(dto).subscribe(user => this.users.push(user));
  }

}
