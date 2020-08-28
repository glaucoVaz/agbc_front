import { ClientService } from '../../../../shared/services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private clientsService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      type: new FormControl(),
      nickname: new FormControl(),
      name: new FormControl(),
      cnpj: new FormControl(),
      cpf: new FormControl(),
      rg: new FormControl(),
      address: new FormControl(),
      date_of_birthy: new FormControl(),
      phone_number: new FormControl(),
      email: new FormControl(),
      website: new FormControl(),
      instagram: new FormControl(),
      reference: new FormControl(),
   });
  }

  submit() {
    let data = this.clientForm.value;
    this.clientsService.addClient(data).subscribe(res => this.router.navigate(['/clients']))
  }

}
