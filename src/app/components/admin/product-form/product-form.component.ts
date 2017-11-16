import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { 
      
    this.categories$ = this.categoryService.getAll().valueChanges();
  }

  ngOnInit() {
  }

  save(product) {
    console.log(product);
    this.productService.create(product);
  }
 
}
