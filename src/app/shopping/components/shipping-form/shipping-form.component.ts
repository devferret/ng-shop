import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Subscription } from 'rxjs/Subscription';
import { Cart } from '../../../shared/models/cart';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Order } from '../../../shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShippingFormComponent implements OnInit {

  @Input('cart') cart: Cart;
  userId: string;
  shipping = {}; 
  authSubscription: Subscription;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart.items);
    let result = await this.orderService.storeOrder(order);

    this.router.navigate(['/order-success', result.key])
  }  
}
