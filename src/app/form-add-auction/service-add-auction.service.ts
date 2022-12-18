import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoOutputCreateAuction} from "../auction-hub/dtos/dto-output-create-auction";

@Injectable({
  providedIn: 'root'
})
export class ServiceAddAuctionService {

  private static readonly ENTRY_POINT = environment.apiUrl + "/auctions"
  constructor(private _httpClient: HttpClient) { }

  create(dto: DtoOutputCreateAuction): Observable<DtoOutputCreateAuction>{
    return this._httpClient.post<DtoOutputCreateAuction>(ServiceAddAuctionService.ENTRY_POINT, dto);
  }
}
