import { Cart } from '../../shared/models/cart';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/models/product';
import { query } from '@angular/core/src/animation/dsl';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  filteredProducts: Product[];
  products: Product[];
  category: string;
  cart$: Observable<Cart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.productService.getAll()
    .switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }

  private applyFilter() {
    this.filteredProducts = this.category ? 
    this.products.filter(product => product.category === this.category) :
    this.products;
  }
}
