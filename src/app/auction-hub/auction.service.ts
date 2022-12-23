import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DtoInputAuction } from './dtos/dto-input-auction';
import { Observable } from 'rxjs';
import { DtoOutputCreateAuction } from './dtos/dto-output-create-auction';
import { DtoOutputPatchAuction } from './dtos/dto-output-patch-auction';
import { DtoAuctionTime } from './dtos/dto-auction-time';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  // URL de l'API REST pour accéder aux enchères
  private static readonly ENTRY_POINT = environment.apiUrl + '/auctions';

  constructor(private httpClient: HttpClient) {}

  // Récupère toutes les enchères avec le temps restant
  fetchAll2(): Observable<DtoAuctionTime[]> {
    return this.httpClient.get<DtoAuctionTime[]>(AuctionService.ENTRY_POINT);
  }

  // Récupère toutes les enchères
  fetchAll(): Observable<DtoInputAuction[]> {
    return this.httpClient.get<DtoInputAuction[]>(AuctionService.ENTRY_POINT);
  }

  // Crée une nouvelle enchère
  create(dto: DtoOutputCreateAuction): Observable<DtoInputAuction> {
    return this.httpClient.post<DtoInputAuction>(`${AuctionService.ENTRY_POINT}/create`, dto);
  }

  // Récupère une enchère par son ID
  fetchById(id: number): Observable<DtoInputAuction> {
    return this.httpClient.get<DtoInputAuction>(`${AuctionService.ENTRY_POINT}/${id}`);
  }

  // Met à jour le montant de la meilleure offre d'une enchère
  update(dto: DtoOutputPatchAuction): Observable<DtoInputAuction> {
    return this.httpClient.patch<DtoInputAuction>(`${AuctionService.ENTRY_POINT}/setTopBid/${dto.id}`, dto);
  }
}
