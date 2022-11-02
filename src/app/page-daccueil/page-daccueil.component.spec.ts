import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDaccueilComponent } from './page-daccueil.component';

describe('PageDaccueilComponent', () => {
  let component: PageDaccueilComponent;
  let fixture: ComponentFixture<PageDaccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDaccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
