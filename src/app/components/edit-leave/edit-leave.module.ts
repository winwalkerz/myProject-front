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
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';


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
    NzSelectModule,
    NzMessageModule,
    NzPopconfirmModule,
    NzModalModule,
    NzDividerModule,
    NzAlertModule,
    NzUploadModule,
    NzIconModule
  ]
  
})
export class EditLeaveModule { }