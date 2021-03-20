import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';



@NgModule({
  declarations: [AddUsersComponent],
  imports: [
    CommonModule,
    NzInputModule,
    FormsModule,
    NzGridModule,
    NzDrawerModule,
    NzButtonModule,
    NzDatePickerModule,
    NzSelectModule,
    NzMessageModule,
    NzModalModule,
    NzIconModule,
    NzAlertModule,
    NzDividerModule,
    NzFormModule
  ]
})
export class AddUsersModule { }
