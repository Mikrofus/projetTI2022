import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {PageDaccueilComponent} from "./page-daccueil/page-daccueil.component";
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";
import {FormAddAuctionComponent} from "./form-add-auction/form-add-auction.component";




const routes:Routes=[
  {
    path:'login',component:PageDaccueilComponent
  },

  {
    path:'root', component:PageAccueilComponent
  },

  {
    path:'form-add-auction', component:FormAddAuctionComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
