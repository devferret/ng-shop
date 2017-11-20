import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminOrdersComponent implements OnInit {

  orders$;

  constructor(private orderService: OrderService) { 
    this.orders$ = this.orderService.getOrder();
  }

  ngOnInit() {
  }

}
