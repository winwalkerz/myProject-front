import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { AddHolidayModule } from '../../../components/add-holiday/add-holiday.module';
@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    NzCalendarModule,
    NzSelectModule,
    FormsModule,
    AddHolidayModule,
  ]
})
export class CalenderModule { }