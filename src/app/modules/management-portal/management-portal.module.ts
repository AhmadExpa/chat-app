import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPortalRoutingModule } from './management-portal-routing.module';
import { ManagementPortalComponent } from './management-portal.component';

import { RegisterComponent } from './components/pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/pages/login/login.component';


@NgModule({
  declarations: [
    ManagementPortalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ManagementPortalRoutingModule,
    FormsModule
  ],
  providers: []
})
export class ManagementPortalModule { }
