import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  statusMenu: boolean = true;
  pageTitle: String;
  
  @Output()
  statusMenuEmitter = new EventEmitter();

  constructor(
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
         this.pageTitle = data.state.root.firstChild?.data.title;
      }
    });
  }

  toogleMenu(){
    this.statusMenu = !this.statusMenu;
    this.statusMenuEmitter.emit(this.statusMenu)
  }
  
  logoff() {
    this.authService.logout();
  }
}
