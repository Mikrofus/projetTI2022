import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DtoOutputUser} from "./dto-user/dto-output-user";
import {Observable} from "rxjs";
import {DtoInputUser} from "./dto-user/dto-input-user";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private static readonly ENTRY_POINT = `${environment.apiUrl}/users/create`

  constructor(private _httpClient: HttpClient) {
  }

  create(dto: DtoOutputUser): Observable<DtoInputUser> {
    return this._httpClient.post<DtoInputUser>(InscriptionService.ENTRY_POINT, dto);
  }
}
