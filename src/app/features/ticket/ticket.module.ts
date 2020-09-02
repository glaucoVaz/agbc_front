import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from 'angular-datatables';

import { TicketComponent } from './page/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';


@NgModule({
  declarations: [
    TicketComponent,
    TicketFormComponent,
    TicketTableComponent
  ],
  imports: [
  CommonModule,
    RouterModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    DataTablesModule
  ]
})
export class TicketModule { }
