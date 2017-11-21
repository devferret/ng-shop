import { Cart } from '../../shared/models/cart';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit { 
  
  cart$: Observable<Cart>;

  constructor(
    private cartService: ShoppingCartService
  ) { }
  
  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
}
