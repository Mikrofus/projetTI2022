import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {DtoInputUser} from "./dtos/dto-input-user";
import {HttpClient} from "@angular/common/http";
import {DtoOutputCreateUser} from "./dtos/dto-output-user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static readonly ENTRY_POINT = environment.apiUrl + "/users";

  constructor(private _httpClient: HttpClient) {
  }

  fetchAll(): Observable<DtoInputUser[]> {
    return this._httpClient.get<DtoInputUser[]>(UserService.ENTRY_POINT);
  }

  fetchById(): Observable<DtoInputUser> {
    return this._httpClient.get<DtoInputUser>(UserService.ENTRY_POINT+"/fetchById");
  }

  create(dto: DtoOutputCreateUser): Observable<DtoInputUser> {
    return this._httpClient.post<DtoInputUser>(UserService.ENTRY_POINT, dto);
  }


}
