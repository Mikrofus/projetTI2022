import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/menu-user/menu-user.component.spec.ts
import { MenuUserComponent } from './menu-user.component';

describe('MenuUserComponent', () => {
  let component: MenuUserComponent;
  let fixture: ComponentFixture<MenuUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuUserComponent);
import { AuctionDetailComponent } from './auction-detail.component';

describe('AuctionDetailComponent', () => {
  let component: AuctionDetailComponent;
  let fixture: ComponentFixture<AuctionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionDetailComponent);
>>>>>>>> feature/page-accueil:src/app/auction-hub/auction-detail/auction-detail.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
