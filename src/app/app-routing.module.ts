import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {PageDaccueilComponent} from "./page-daccueil/page-daccueil.component";
import {TestVideComponent} from "./test-vide/test-vide.component";


const routes:Routes=[
  {
    path:'', component:TestVideComponent
  },
  {
    path:'login',component:PageDaccueilComponent
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
