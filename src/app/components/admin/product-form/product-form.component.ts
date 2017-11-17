import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
  ) { 
      
    this.categories$ = this.categoryService.getAll().valueChanges();
  }

  ngOnInit() {
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['admin/products']);
  }
 
}
