import { ShowHolidayComponent } from './show-holiday.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [ShowHolidayComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzGridModule,
    NzTableModule,

  ]
})
export class ShowHolidayModule { }
