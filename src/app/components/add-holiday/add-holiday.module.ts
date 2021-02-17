import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHolidayComponent } from './add-holiday.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [AddHolidayComponent],
  imports: [
    CommonModule,
    NzModalModule,
    NzGridModule,NzInputModule,FormsModule,NzButtonModule,
  ]
})
export class AddHolidayModule { }