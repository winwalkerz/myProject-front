import { GuardGuard } from './guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    canActivate: [GuardGuard],
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    canActivate: [GuardGuard],
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'users-list',
    loadChildren: () =>
      import('./pages/admin/users-list/users-list.module').then(
        (m) => m.UsersListModule
      ),
  },
  
  { path: 'calender', loadChildren: () => import('./pages/admin/calender/calender.module').then(m => m.CalenderModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}