import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DtoLoginUser} from "./dto-user/dto-login-user";
import {Observable} from "rxjs";
import {DtoInputUser} from "../user-hub/dtos/dto-input-user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private static readonly ENTRY_POINT = environment.apiUrl + "/users/login"
  constructor(private _httpClient: HttpClient) { }


  login(dto: DtoLoginUser){

    return this._httpClient.post(LoginService.ENTRY_POINT, dto, {withCredentials: true});
  }
}
