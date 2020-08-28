import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TicketService } from 'src/app/shared/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  ticketForm: FormGroup;

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.ticketForm = new FormGroup({
      name: new FormControl(),
      date: new FormControl(),
      type: new FormControl(),
      value: new FormControl(),
      status: new FormControl(),
      category: new FormControl(),
      account: new FormControl(),
      client: new FormControl(),
      description: new FormControl(),
   });
  }

  submit() {
    let data = this.ticketForm.value;
    this.ticketService.post(data).subscribe(res => this.router.navigate(['/tickets']))
  }

}
