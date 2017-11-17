import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProductsComponent implements OnInit {

  products$;

  constructor(private productService: ProductService) { 

    this.products$ = this.productService.getAll();
  }

  ngOnInit() {
  }

}
