import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditLeaveComponent } from './edit-leave.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';


@NgModule({
  declarations: [EditLeaveComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    FormsModule,
    NzDatePickerModule,
    NzSelectModule
  ]
})
export class EditLeaveModule { }