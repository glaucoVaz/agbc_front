import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/helpers/canActivate.helper';
import { AuthComponent } from './features/auth/auth.component';
import { ClientComponent } from './features/client/page/client.component';
import { ClientFormComponent } from './features/client/components/client-form/client-form.component';
import { TicketComponent } from './features/ticket/page/ticket.component'
import { TicketFormComponent } from './features/ticket/components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path: '', component: AuthComponent},

  {path: 'tickets', component: TicketComponent, canActivate: [AuthGuard]},
  {path: 'tickets/new', component: TicketFormComponent, canActivate: [AuthGuard]},

  {path: 'clients', component: ClientComponent, canActivate: [AuthGuard]},
  {path: 'clients/new', component: ClientFormComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
