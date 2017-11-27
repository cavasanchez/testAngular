import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartiesComponent } from './parties/parties.component';
import { DetailPartyComponent } from './detail-party/detail-party.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'parties', component: PartiesComponent },
  { path: 'partyDetail/:id', component: DetailPartyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
