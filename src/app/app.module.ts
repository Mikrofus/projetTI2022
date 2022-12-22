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
import {RouterLink, RouterOutlet, RouterLinkActive, Router} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { FormAddAuctionComponent } from './form-add-auction/form-add-auction.component';
import {MenuAuctionComponent} from "./menu-auction/menu-auction.component";
import { MenuUserComponent } from './menu-user/menu-user.component';
import { AddAuctionComponent } from './form-add-auction/add-auction/add-auction.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {TokenInterceptor, TokenInterceptorProvider} from "./user-hub/token.interceptor";
import { CookieModule } from 'ngx-cookie'


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
    AuctionDetailComponent,
    FormAddAuctionComponent,
    MenuAuctionComponent,
    MenuUserComponent,
    AddAuctionComponent,
    PiedPageComponent
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
    RouterOutlet,
    CookieModule.forRoot()
  ],
  providers: [TokenInterceptorProvider],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
