import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu'; //ต้องลงตัวนี้!!!! แล้ว sider bar จะขึ้น
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddLeaveModule } from '../../components/add-leave/add-leave.module';
import { CalenerModule } from '../../components/calener/calener.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzLayoutModule,
    FormsModule,
    NzSelectModule,
    NzFormModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzTableModule,
    NzButtonModule,
    AddLeaveModule,
    CalenerModule,
  ]
})
export class MainModule { }
