import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListLeaveComponent } from './user-list-leave.component';

describe('UserListLeaveComponent', () => {
  let component: UserListLeaveComponent;
  let fixture: ComponentFixture<UserListLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
