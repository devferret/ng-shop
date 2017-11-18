import { Cart } from './../../models/cart';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { query } from '@angular/core/src/animation/dsl';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit, OnDestroy {

  filteredProducts: Product[];
  products: Product[];
  category: string;
  cart: Cart;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService) {

    this.productService.getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = this.category ? 
          this.products.filter(product => product.category === this.category) :
          this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(
      cart => this.cart = cart as Cart
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
