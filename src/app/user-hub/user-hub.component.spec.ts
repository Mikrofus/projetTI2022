import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHubComponent } from './user-hub.component';

describe('UserHubComponent', () => {
  let component: UserHubComponent;
  let fixture: ComponentFixture<UserHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
