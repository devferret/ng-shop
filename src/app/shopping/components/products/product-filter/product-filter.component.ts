import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CategoryService } from '../../../../shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFilterComponent implements OnInit {

  @Input('category') category;
  categories$;

  constructor(private categoryService: CategoryService) { 
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit() {
  }

}
