import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {PageDaccueilComponent} from "./page-daccueil/page-daccueil.component";

import {AuctionHubComponent} from "./auction-hub/auction-hub.component";
import {AuctionListComponent} from "./auction-hub/auction-list/auction-list.component";
import {AuctionDetailComponent} from "./auction-hub/auction-detail/auction-detail.component";


const routes:Routes=[
  {
    path:'list',component:AuctionListComponent
  },
  {
    path:'detail/:auctionId',component:AuctionDetailComponent
  },
  {
    path:'login',component:PageDaccueilComponent
  },
  {
    path:'', component:AuctionHubComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
