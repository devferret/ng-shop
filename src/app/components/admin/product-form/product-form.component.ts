import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(private categoryService: CategoryService) { 
    
    this.categories$ = this.categoryService.getAll().valueChanges();
  }

  ngOnInit() {
  }

}
