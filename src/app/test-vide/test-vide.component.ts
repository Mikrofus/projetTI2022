import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-test-vide',
  templateUrl: './test-vide.component.html',
  styleUrls: ['./test-vide.component.css']
})
export class TestVideComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faUserPlus = faUserPlus;
  faUser = faUser;
  constructor() { }

  ngOnInit(): void {
  }

}
