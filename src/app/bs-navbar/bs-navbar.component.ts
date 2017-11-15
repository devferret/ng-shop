import { AuthService } from './../services/auth.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BsNavbarComponent {

  constructor(public auth: AuthService) {  }

  logout() {
    this.auth.logout();
  }
}
