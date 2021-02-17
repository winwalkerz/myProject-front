import { CommonModule } from '@angular/common';
import { LeaveDetailComponent } from './leave-detail.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';     //ถ้าไม่ลงใช้ ngModel ไม่ได้



@NgModule({
  declarations: [LeaveDetailComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzGridModule,
    NzSelectModule,
    NzButtonModule,
    FormsModule
  ]
})
export class LeaveDetailModule { }
