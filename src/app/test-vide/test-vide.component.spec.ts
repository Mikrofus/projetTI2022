import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVideComponent } from './test-vide.component';

describe('TestVideComponent', () => {
  let component: TestVideComponent;
  let fixture: ComponentFixture<TestVideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestVideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestVideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
