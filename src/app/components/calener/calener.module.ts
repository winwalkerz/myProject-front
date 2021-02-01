import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenerComponent } from './calener.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';


@NgModule({
  declarations: [CalenerComponent],
  imports: [
    CommonModule,NzCalendarModule,
  ]
})
export class CalenerModule { }
