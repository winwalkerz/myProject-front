import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllcheckListComponent } from './admin-allcheck-list.component';

describe('AdminAllcheckListComponent', () => {
  let component: AdminAllcheckListComponent;
  let fixture: ComponentFixture<AdminAllcheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllcheckListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllcheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
