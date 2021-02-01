import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaveComponent } from './add-leave.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AddLeaveComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzDrawerModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
  ]
})
export class AddLeaveModule { }
