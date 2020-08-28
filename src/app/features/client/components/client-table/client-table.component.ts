import { ClientService } from '../../../../shared/services/client.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {


  rows = [];
  
  columns = [
    {
      prop: "type",
      name: "Tipo"
  },
  {
      prop: "nickname",
      name: "Apelido"
  },
  {
      prop: "name",
      name: "Nome"
  },
  {
      prop: "cnpj",
      name: "CNPJ"
  },
  {
      prop: "cpf",
      name: "CPF"
  },
  {
      prop: "rg",
      name: "RG"
  },
  {
      prop: "address",
      name: "Endereço"
  },
  {
      prop: "date_of_birthy",
      name: "Data"
  },
  {
      prop: "phone_number",
      name: "Numero"
  },
  {
      prop: "email",
      name: "Email"
  },
  {
      prop: "website",
      name: "Website"
  },
  {
      prop: "instagram",
      name: "Instagram"
  },
  {
      prop: "reference",
      name: "Onde"
  },
  ]

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
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
      this.rows = res.clients;
    })
  }
}
