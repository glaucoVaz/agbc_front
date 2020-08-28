import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../../shared/services/ticket.service';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.scss']
})
export class TicketTableComponent implements OnInit {

  aPagar = 0;
  aReceber = 0
  total = 0;
  totalPrevisto =0;

  rows = [];

  columns = [
    {
      name: 'Data',      
      prop: 'date',
    },
    {
      name: 'Tipo',      
      prop: 'type',
    },
    {
      name: 'Conta',      
      prop: 'account',
    },
    {
      name: 'Valor',      
      prop: 'value',
    },
    {
      name: 'Status',      
      prop: 'status',
    },
    {
      name: 'Categoria',      
      prop: 'category',
    },
    {
      name: 'Descrição',      
      prop: 'description',
    },
    {
      name: 'Cliente',      
      prop: 'client',
    },
];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.ticketService.getAll().subscribe((res: any) => {
      this.rows = res;
      this.calc()
    })
  }

  delete(id) {
    this.ticketService.deleteTicket(id)
    .subscribe( res => {
      this.get()
    })
  }

  calc() {
    this.total = 0;
    this.aPagar = 0;
    this.aReceber = 0;
    this.totalPrevisto = 0;
    for(let item of this.rows) {
      if (item.status) {
        if (item.type) {
          this.total += item.value;
        } else {
          this.total -= item.value;
        }
      } else {
        if (item.type) {
          this.aReceber += item.value
          this.totalPrevisto += item.value;
        } else {
          this.aPagar += item.value
          this.totalPrevisto -= item.value;
        }
      }
    }
  }
}
