import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { BaseService } from './base.service';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService{
  path = this.baseUrl + 'clients';

  constructor(protected httpClient: HttpClient) {
    super();
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.path)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((res: any) => res.clients.map(a => new Client().deserialize(a)))
      )
  }

  addClient(clients): Observable<Client> {
    return this.httpClient.post<Client>(this.path, JSON.stringify(clients), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((res: any) => new Client().deserialize(res.client))
      )
  }

  deleteClient(id): Observable<Client> {
    return this.httpClient.delete<Client>(this.path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((res: any) => new Client().deserialize(res.client))
      )
  }
}
