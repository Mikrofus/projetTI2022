import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageDaccueilComponent } from './page-daccueil/page-daccueil.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {PageDaccueilComponent} from './page-daccueil/page-daccueil.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InscriptionComponent} from './inscription/inscription.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { TestVideComponent } from './test-vide/test-vide.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    PageDaccueilComponent,
    LoginComponent,
    InscriptionComponent,
    TestVideComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterLinkWithHref,
    RouterOutlet,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
