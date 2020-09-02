import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, MenuComponent],
  exports: [MainComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgxDatatableModule
  ],
})
export class SharedModule { }
