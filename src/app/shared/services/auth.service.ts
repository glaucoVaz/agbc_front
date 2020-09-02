import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class AuthService extends BaseService {

    constructor(protected httpClient: HttpClient) {
        super();
    }

    login(email: string, password: string) {
        return this.httpClient.post<any>(`${this.baseUrl}auth/authenticate`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.setSession(user)
            }));

    }
          
    private setSession(authResult) {
        const expiresAt = moment().add(3600,'second');

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        window.location.href='http://painel.agbluecherry.com/login';
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
