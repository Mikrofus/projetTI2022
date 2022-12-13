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
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { FormAddAuctionComponent } from './form-add-auction/form-add-auction.component';




// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PageDaccueilComponent,
    LoginComponent,
    InscriptionComponent,
    PageAccueilComponent,
    FormAddAuctionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,

  ],
  providers: [],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
