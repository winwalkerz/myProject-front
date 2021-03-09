import { CommonModule } from '@angular/common';
import { LeaveDetailComponent } from './leave-detail.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';     //ถ้าไม่ลงใช้ ngModel ไม่ได้
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';



@NgModule({
  declarations: [LeaveDetailComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzGridModule,
    NzSelectModule,
    NzButtonModule,
    FormsModule,
    NzTableModule,
    NzTabsModule,
    NzDividerModule,
    NzTagModule
  ]
})
export class LeaveDetailModule { }
