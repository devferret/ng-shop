import { AppUser } from './../../models/app-user';
import { AuthService } from '../../services/auth.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BsNavbarComponent {

  appUser: AppUser;

  constructor(public auth: AuthService) { 
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);  
  }

  logout() {
    this.auth.logout();
  }
}
