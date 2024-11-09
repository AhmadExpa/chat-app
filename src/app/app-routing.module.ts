import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/Auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/main-portal/main-portal.module').then(m => m.MainPortalModule) },
  { path: 'auth', loadChildren: () => import('./modules/management-portal/management-portal.module').then(m => m.ManagementPortalModule) },
  { path: 'chat-portal', canMatch: [authGuard], loadChildren: () => import('./modules/chat-portal/chat-portal.module').then(m => m.ChatPortalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
