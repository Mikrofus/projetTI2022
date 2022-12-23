import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAuctionComponent } from './form-add-auction.component';

describe('FormAddAuctionComponent', () => {
  let component: FormAddAuctionComponent;
  let fixture: ComponentFixture<FormAddAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddAuctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
