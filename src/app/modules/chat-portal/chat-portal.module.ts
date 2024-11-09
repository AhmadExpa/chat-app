import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPortalRoutingModule } from './chat-portal-routing.module';
import { ChatPortalComponent } from './chat-portal.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';


@NgModule({
  declarations: [
    ChatPortalComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ChatPortalRoutingModule,
    FormsModule
  ]
})
export class ChatPortalModule { }
