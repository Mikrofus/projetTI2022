import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHubComponent } from './product-hub.component';

describe('ProductHubComponent', () => {
  let component: ProductHubComponent;
  let fixture: ComponentFixture<ProductHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
