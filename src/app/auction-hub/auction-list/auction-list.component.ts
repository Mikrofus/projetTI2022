import {Component, Input} from '@angular/core';
import {DtoInputAuction} from "../dtos/dto-input-auction";

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent {
@Input() auctions : DtoInputAuction[] = [];
}
