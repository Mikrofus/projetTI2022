import {Component, Input, OnInit} from '@angular/core';
import {DtoInputAuction} from "../dtos/dto-input-auction";
import { Buffer } from 'buffer';


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']

})
export class AuctionListComponent{

  @Input() auctions: DtoInputAuction[] = [];


  constructor() {

  }



  minutes: number = 0;
  seconds: number = 0;
  isPaused: boolean = false;

  // btoa(img: string) {
  //   console.log(window.btoa(img))
  //   return window.btoa(img);
  // }

  // arrayBufferToBase64(arrayBuffer: string): string {
  //   let binary = '';
  //   const bytes = new Uint8Array(arrayBuffer);
  //   const len = bytes.byteLength;
  //   for (let i = 0; i < len; i++) {
  //     binary += String.fromCharCode(bytes[i]);
  //   }
  //   return window.btoa(binary);
  // }
}
