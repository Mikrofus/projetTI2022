import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faUserPlus = faUserPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
