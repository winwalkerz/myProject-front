import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListLeaveComponent } from './user-list-leave.component';

const routes: Routes = [{ path: '', component: UserListLeaveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListLeaveRoutingModule { }
