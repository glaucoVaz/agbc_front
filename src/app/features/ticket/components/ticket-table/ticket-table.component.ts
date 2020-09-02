import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../../shared/services/ticket.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.scss']
})
export class TicketTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  aPagar = 0;
  aReceber = 0
  total = 0;
  totalPrevisto =0;

  tickets;

  columns = [
    'Data',
    'Tipo',
    'Conta',
    'Valor',
    'Status',
    'Categoria',
    'Descrição',
    'Cliente',
    'Ações'
];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.get()
  }

  get() {
    this.ticketService.getAll().subscribe((res: any) => {
      this.tickets = res;
      // this.calc()
      this.dtTrigger.next();
    })
  }

  delete(id) {
    this.ticketService.deleteTicket(id)
    .subscribe( res => {
      this.get()
    })
  }

  // calc() {
  //   this.total = 0;
  //   this.aPagar = 0;
  //   this.aReceber = 0;
  //   this.totalPrevisto = 0;
  //   for(let item of this.rows) {
  //     if (item.status) {
  //       if (item.type) {
  //         this.total += item.value;
  //       } else {
  //         this.total -= item.value;
  //       }
  //     } else {
  //       if (item.type) {
  //         this.aReceber += item.value
  //         this.totalPrevisto += item.value;
  //       } else {
  //         this.aPagar += item.value
  //         this.totalPrevisto -= item.value;
  //       }
  //     }
  //   }
  // }
}
