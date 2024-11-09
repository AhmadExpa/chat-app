import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPortalComponent } from './chat-portal.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [{
  path: '', component: ChatPortalComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatPortalRoutingModule { }
