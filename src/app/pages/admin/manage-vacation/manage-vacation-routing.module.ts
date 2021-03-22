import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageVacationComponent } from './manage-vacation.component';

const routes: Routes = [{ path: '', component: ManageVacationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageVacationRoutingModule { }
