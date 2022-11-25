import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtDconexionComponent } from './bt-dconexion.component';

describe('BtDconexionComponent', () => {
  let component: BtDconexionComponent;
  let fixture: ComponentFixture<BtDconexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtDconexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtDconexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
