import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageDaccueilComponent } from './page-daccueil/page-daccueil.component';
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";

@NgModule({
  declarations: [
    AppComponent,
    PageDaccueilComponent,
    LoginComponent,
    InscriptionComponent,
    PageAccueilComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
