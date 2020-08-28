import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.menu = [
      {
        name: 'Financeiro',
        path: '/tickets',
        icon: ''
      },
      {
        name: 'Clientes',
        path: '/clients',
        icon: ''
      },
    ]
  }

  logoff() {
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
