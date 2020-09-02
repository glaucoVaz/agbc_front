import { ClientService } from '../../../../shared/services/client.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  clients;

  columns = [
    "Tipo",
    "Apelido",
    "Nome",
    "Documento",
    "Telefone",
    "Email",
    "Instagram",
    "Ações"
  ]

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getClients();
  }

  delete(id) {
    this.clientService.deleteClient(id)
    .subscribe( res => {
      this.getClients()
    })
  }

  getClients() {
    this.clientService.getClients().subscribe( (res: any) => {
      this.clients = res;
      this.dtTrigger.next();
    })
  }
}
