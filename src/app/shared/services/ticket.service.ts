import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { Ticket } from '../models/ticket.model';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends BaseService {
  path = this.baseUrl + 'tickets';

  constructor(protected httpClient: HttpClient) {
    super();
  }

  getAll(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.path)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((res: any) => res.tickets.map(a => new Ticket().deserialize(a)))
      );
  }

  post(ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(this.path, JSON.stringify(ticket), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((res: any) => new Ticket().deserialize(res.ticket))
      );
  }

  deleteTicket(id): Observable<Ticket> {
    return this.httpClient.delete<Ticket[]>(this.path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((res: any) => new Ticket().deserialize(res))
      );
  }
}
