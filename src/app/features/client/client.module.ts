import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { ClientComponent } from './page/client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientTableComponent } from './components/client-table/client-table.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientFormComponent,
    ClientTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class ClientModule { }
