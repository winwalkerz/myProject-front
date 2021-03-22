import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHolidayComponent } from './show-holiday.component';

describe('ShowHolidayComponent', () => {
  let component: ShowHolidayComponent;
  let fixture: ComponentFixture<ShowHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
