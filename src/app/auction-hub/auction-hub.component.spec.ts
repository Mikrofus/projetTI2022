import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionHubComponent } from './auction-hub.component';

describe('AuctionHubComponent', () => {
  let component: AuctionHubComponent;
  let fixture: ComponentFixture<AuctionHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
