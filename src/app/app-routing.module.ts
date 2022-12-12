import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {PageDaccueilComponent} from "./page-daccueil/page-daccueil.component";
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";
import {InscriptionComponent} from "./inscription/inscription.component";



const routes:Routes=[
  {
    path:'login',component:PageDaccueilComponent
  },

  {
    path:'register',component:InscriptionComponent
  },

  {
    path:'', component:PageAccueilComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
