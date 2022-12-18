import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { PageDaccueilComponent } from './page-daccueil/page-daccueil.component';
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AuctionHubComponent} from "./auction-hub/auction-hub.component";
import {AuctionListComponent} from "./auction-hub/auction-list/auction-list.component";
import {HttpClientModule} from "@angular/common/http";
import { AuctionDetailComponent } from './auction-hub/auction-detail/auction-detail.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { FormAddAuctionComponent } from './form-add-auction/form-add-auction.component';
import {HttpClientModule} from "@angular/common/http";
import {MenuAuctionComponent} from "./menu-auction/menu-auction.component";
import { MenuUserComponent } from './menu-user/menu-user.component';




// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PageDaccueilComponent,
    LoginComponent,
    InscriptionComponent,
    PageAccueilComponent,
    AuctionHubComponent,
    AuctionListComponent,
    AuctionDetailComponent
    PageAccueilComponent,
    FormAddAuctionComponent,
    MenuAuctionComponent,
    MenuUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
