import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAuctionComponent } from './menu-auction.component';

describe('MenuAuctionComponent', () => {
  let component: MenuAuctionComponent;
  let fixture: ComponentFixture<MenuAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAuctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
