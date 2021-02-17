import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LeaveDetailModule } from '../../components/leave-detail/leave-detail.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AddUsersModule } from '../../components/add-users/add-users.module';
import { CalenderModule } from './calender/calender.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { UsersListModule } from './users-list/users-list.module';









@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzSelectModule,
    FormsModule,
    NzTableModule,
    NzMenuModule,
    LeaveDetailModule,
    NzButtonModule,
    NzInputModule,
    AddUsersModule,
    CalenderModule,
    NzPaginationModule,
    UsersListModule
  ]
})
export class AdminModule { }
