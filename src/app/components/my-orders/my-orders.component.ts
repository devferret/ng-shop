import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';
import { AuthService } from '../../shared/services/auth.service';
import { Order } from '../../shared/models/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyOrdersComponent implements OnInit {

  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) { 

    // this.authService.user$.subscribe(user => console.log(user.uid));
    // this.orderService.getOrder('7YADFUlz7DbmJMA0d7C715K24Mt1').subscribe(x => console.log(x));
    this.orders$ = this.authService.user$.switchMap(user => this.orderService.getOrder(user.uid));
  }

  ngOnInit() {
  }

}
