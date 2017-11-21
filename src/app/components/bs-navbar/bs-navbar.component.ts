import { AppUser } from '../../shared/models/app-user';
import { AuthService } from '../../shared/services/auth.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  cart$;

  constructor(public auth: AuthService, private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = (await this.cartService.getCart());
  }

  logout() {
    this.auth.logout();
  }
}
