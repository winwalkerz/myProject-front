import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserListLeaveRoutingModule } from './user-list-leave-routing.module';
import { UserListLeaveComponent } from './user-list-leave.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu'; //ต้องลงตัวนี้!!!! แล้ว sider bar จะขึ้น
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzAlertModule } from 'ng-zorro-antd/alert';


@NgModule({
  declarations: [UserListLeaveComponent],
  imports: [
    CommonModule,
    UserListLeaveRoutingModule,
    FormsModule,
    FormsModule,
    NzSelectModule,
    NzFormModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzTableModule,
    NzButtonModule,
    NzTagModule,
    NzToolTipModule,
    NzModalModule,
    NzLayoutModule,
    NzImageModule,
    NzMessageModule,
    NzPopconfirmModule,
    NzAlertModule,
    NzPaginationModule
  ]
})
export class UserListLeaveModule { }