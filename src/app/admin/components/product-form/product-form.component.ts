import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {

  categories$;
  product: Product;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
  ) { 
      
    this.categories$ = this.categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(product => this.product = product);
  }

  ngOnInit() {
  }

  save(product: Product) {
    product.title = product.title.charAt(0).toUpperCase() + product.title.substr(1).toLowerCase();
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['admin/products']);
  }
 
  delete() {
    if (!confirm('Are you sure to delete this product ?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['admin/products']);
  }
}
