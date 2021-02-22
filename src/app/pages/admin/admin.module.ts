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
import { AddUsersModule } from '../../components/add-users/add-users.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzTableModule,
    NzLayoutModule,
    NzIconModule,
    NzSelectModule,
    NzMenuModule,
    FormsModule,
    LeaveDetailModule,
    AddUsersModule,
    NzButtonModule,
    NzAvatarModule,
    NzDropDownModule

  ]
})
export class AdminModule { }