import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ProductHubComponent } from './product-hub/product-hub.component';
import { AuctionHubComponent } from './auction-hub/auction-hub.component';
import { AuctionListComponent } from './auction-hub/auction-list/auction-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    ProductHubComponent,
    AuctionHubComponent,
    AuctionListComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
