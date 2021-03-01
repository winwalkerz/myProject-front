import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUncheckListComponent } from './admin-uncheck-list.component';

describe('AdminUncheckListComponent', () => {
  let component: AdminUncheckListComponent;
  let fixture: ComponentFixture<AdminUncheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUncheckListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUncheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
