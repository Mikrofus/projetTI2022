import { Component, OnInit } from '@angular/core';
import { DtoInputAuction } from './dtos/dto-input-auction';
import { AuctionService } from './auction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auction-hub',
  templateUrl: './auction-hub.component.html',
  styleUrls: ['./auction-hub.component.css']
})
export class AuctionHubComponent implements OnInit {

  auctions: DtoInputAuction[] = [];


  constructor(private auctionService: AuctionService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupère toutes les enchères au chargement du composant
    this.fetchAll();
  }

  // Récupère toutes les enchères
  private fetchAll() {
    this.auctionService.fetchAll().subscribe(auctions => (this.auctions = auctions));
  }
}
