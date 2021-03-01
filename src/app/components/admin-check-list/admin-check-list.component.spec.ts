import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckListComponent } from './admin-check-list.component';

describe('AdminCheckListComponent', () => {
  let component: AdminCheckListComponent;
  let fixture: ComponentFixture<AdminCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
