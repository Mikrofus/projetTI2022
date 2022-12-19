import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DtoInputAuction} from "./dtos/dto-input-auction";
import {Observable} from "rxjs";
import {DtoOutputCreateAuction} from "./dtos/dto-output-create-auction";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private static readonly ENTRY_POINT = environment.apiUrl + "/auctions"

  constructor(private _httpClient: HttpClient) {
  }

  fetchAll(): Observable<DtoInputAuction[]> {
    return this._httpClient.get<DtoInputAuction[]>(AuctionService.ENTRY_POINT);
  }

  create(dto: DtoOutputCreateAuction): Observable<DtoInputAuction> {
    return this._httpClient.post<DtoInputAuction>(AuctionService.ENTRY_POINT+'/create', dto);
  }

  fetchById(id: number): Observable<DtoInputAuction> {
    return this._httpClient.get<DtoInputAuction>(`${AuctionService.ENTRY_POINT}/${id}`);
  }
}
