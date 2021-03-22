import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVacationComponent } from './manage-vacation.component';

describe('ManageVacationComponent', () => {
  let component: ManageVacationComponent;
  let fixture: ComponentFixture<ManageVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
