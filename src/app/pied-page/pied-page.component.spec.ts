import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedPageComponent } from './pied-page.component';

describe('PiedPageComponent', () => {
  let component: PiedPageComponent;
  let fixture: ComponentFixture<PiedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
