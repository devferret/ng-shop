import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { query } from '@angular/core/src/animation/dsl';

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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {

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

  ngOnInit() {
  }

}
