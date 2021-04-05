import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberDetailsRoutingModule } from './member-details-routing.module';
import { MemberDetailsComponent } from './member-details.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [MemberDetailsComponent],
  imports: [
    CommonModule,
    MemberDetailsRoutingModule,
    NzGridModule,
    NzImageModule,
    NzDividerModule,
    NzTableModule,
    NzTagModule,
    NzIconModule,
    NzPaginationModule,
    NzToolTipModule
  ]
})
export class MemberDetailsModule { }