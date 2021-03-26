import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageVacationComponent } from './manage-vacation.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBadgeModule } from 'ng-zorro-antd/badge';


@NgModule({
  declarations: [ManageVacationComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzTableModule,
    NzGridModule,
    NzLayoutModule,
    NzIconModule,
    NzToolTipModule,
    NzTagModule,
    NzBadgeModule
  ]
})
export class ManageVacationModule { }
