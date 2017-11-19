import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ShoppingCartService } from './../../../services/shopping-cart.service';
import { Cart } from './../../../models/cart';
import { Product } from './../../../models/product';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product: Product;
  @Input('cart') cart: Cart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.updateCart(this.product, 1);
  }

  removeFromCart() {
    this.cartService.updateCart(this.product, -1);
  }

  ngOnInit() {
  }

}
