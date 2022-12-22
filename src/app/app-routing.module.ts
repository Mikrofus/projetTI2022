import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {PageDaccueilComponent} from "./page-daccueil/page-daccueil.component";

import {AuctionHubComponent} from "./auction-hub/auction-hub.component";
import {AuctionListComponent} from "./auction-hub/auction-list/auction-list.component";
import {AuctionDetailComponent} from "./auction-hub/auction-detail/auction-detail.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {AddAuctionComponent} from "./form-add-auction/add-auction/add-auction.component";
import {MenuUserComponent} from "./menu-user/menu-user.component";


const routes:Routes=[
  {
    path:'list',component:AuctionListComponent
  },
  {
    path:'detail/:auctionId',component:AuctionDetailComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'inscription',component:InscriptionComponent
  },
  {
    path:'', component:AuctionHubComponent
  },
  {
    path:'menuUser', component:MenuUserComponent
  },
  {
    path:'add',component:AddAuctionComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
