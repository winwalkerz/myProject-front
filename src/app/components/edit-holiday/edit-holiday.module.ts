import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditHolidayComponent } from './edit-holiday.component';
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { FormsModule } from '@angular/forms'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'



@NgModule({
  declarations: [EditHolidayComponent],
  imports: [
    CommonModule,
    NzModalModule,
    NzGridModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzMenuModule,
    NzDividerModule,
    NzDatePickerModule
  ]
})
export class EditHolidayModule { }
