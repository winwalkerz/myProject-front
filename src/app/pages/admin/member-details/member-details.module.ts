import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberDetailsRoutingModule } from './member-details-routing.module';
import { MemberDetailsComponent } from './member-details.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [MemberDetailsComponent],
  imports: [
    CommonModule,
    MemberDetailsRoutingModule,
    NzGridModule,
    NzImageModule,
    NzDividerModule
  ]
})
export class MemberDetailsModule { }