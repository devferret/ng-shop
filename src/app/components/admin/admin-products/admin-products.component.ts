import { Product } from './../../../models/product';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProductsComponent implements OnInit {

  products: Product[];
  filteredProducts: Product[];

  constructor(private productService: ProductService) { 

    this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
  }

  filter(query) {
    this.filteredProducts = query ?
      this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  ngOnInit() {
  }

}
