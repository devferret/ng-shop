import { Product } from './../../../models/product';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { Cart } from '../../../models/cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('cart') cart: Cart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getQuantity() {
    if (!this.cart) return 0;

    let item = this.cart.items[this.product.key];
    return item ? item.quantity : 0;
  }

  ngOnInit() {
  }
}
