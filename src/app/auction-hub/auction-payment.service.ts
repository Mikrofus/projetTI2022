import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DtoOutputCreateAuction} from "./dtos/dto-output-create-auction";
import {Observable} from "rxjs";
import {DtoInputAuction} from "./dtos/dto-input-auction";
import {DtoInputAuctionPayment} from "./dtos/dto-input-auction-payment";
import {DtoOutputCreateAuctionPayment} from "./dtos/dto-output-create-auction-payment";

@Injectable({
  providedIn: 'root'
})
export class AuctionPaymentService {

  private static readonly ENTRY_POINT = environment.apiUrl + '/auctionPayment';
  constructor(private _httpClient: HttpClient) { }


  create(dto: DtoOutputCreateAuctionPayment): Observable<DtoInputAuctionPayment> {
    return this._httpClient.post<DtoInputAuctionPayment>(`${AuctionPaymentService.ENTRY_POINT}/create`, dto);
  }

  fetchAll(): Observable<DtoInputAuctionPayment[]>
  {
    return this._httpClient.get<DtoInputAuctionPayment[]>(`${AuctionPaymentService.ENTRY_POINT}/fetchAll`);
  }

}
