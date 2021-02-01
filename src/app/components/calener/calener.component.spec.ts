import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenerComponent } from './calener.component';

describe('CalenerComponent', () => {
  let component: CalenerComponent;
  let fixture: ComponentFixture<CalenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
