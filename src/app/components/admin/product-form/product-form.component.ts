import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
  ) { 
      
    this.categories$ = this.categoryService.getAll().snapshotChanges();

    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.productService.get(id).take(1).subscribe(product => this.product = product);
  }

  ngOnInit() {
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['admin/products']);
  }
 
}
