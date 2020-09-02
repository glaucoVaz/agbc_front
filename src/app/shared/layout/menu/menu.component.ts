import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  statusMenu;

  menu = [
    {
      title: 'Clientes',
      link: '/clients',
      icon: 'clients'
    },
    {
      title: 'Financeiro',
      link: '/tickets',
      icon: 'financial'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}