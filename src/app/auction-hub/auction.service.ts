import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DtoInputAuction} from "./dtos/dto-input-auction";
import {Observable} from "rxjs";
import {DtoOutputCreateAuction} from "./dtos/dto-output-create-auction";
import {DtoOutputPatchAuction} from "./dtos/dto-output-patch-auction";
import {DtoAuctionTime} from "./dtos/dto-auction-time";


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private static readonly ENTRY_POINT = environment.apiUrl + "/auctions"

  constructor(private _httpClient: HttpClient) {
  }

  fetchAll2(): Observable<DtoAuctionTime[]> {
    return this._httpClient.get<DtoAuctionTime[]>(AuctionService.ENTRY_POINT);
  }

  fetchAll(): Observable<DtoInputAuction[]> {
    return this._httpClient.get<DtoInputAuction[]>(AuctionService.ENTRY_POINT);
  }

  create(dto: DtoOutputCreateAuction): Observable<DtoInputAuction> {
    return this._httpClient.post<DtoInputAuction>(AuctionService.ENTRY_POINT+"/create", dto);
  }

  fetchById(id: number): Observable<DtoInputAuction> {
    return this._httpClient.get<DtoInputAuction>(`${AuctionService.ENTRY_POINT}/${id}`);
  }

  update(dto: DtoOutputPatchAuction): Observable<DtoInputAuction>
  {
    console.log(dto)
    return this._httpClient.patch<DtoInputAuction>(`${AuctionService.ENTRY_POINT}/setTopBid/${dto.id}`, dto);
  }
}
