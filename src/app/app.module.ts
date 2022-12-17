import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
