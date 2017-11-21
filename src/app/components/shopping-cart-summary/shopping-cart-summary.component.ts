import { Cart } from '../../shared/models/cart';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingCartSummaryComponent implements OnInit {

  @Input('cart') cart: Cart;

  constructor() { }

  ngOnInit() {
  }

}
