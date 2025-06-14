import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserManagementComponent } from './nav-user-management.component';

describe('NavUserManagementComponent', () => {
  let component: NavUserManagementComponent;
  let fixture: ComponentFixture<NavUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavUserManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
