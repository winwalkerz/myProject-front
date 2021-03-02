import { AdminAllcheckListModule } from './../../../components/admin-allcheck-list/admin-allcheck-list.module';
import { AdminUncheckListModule } from './../../../components/admin-uncheck-list/admin-uncheck-list.module';
import { AdminCheckListModule } from './../../../components/admin-check-list/admin-check-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    FormsModule,
    NzIconModule,
    NzSelectModule,
    NzTableModule,
    NzMenuModule,
    NzPaginationModule,
    NzTabsModule,
    AdminCheckListModule,
    AdminUncheckListModule,
    AdminAllcheckListModule
  ]
})
export class UsersListModule { }