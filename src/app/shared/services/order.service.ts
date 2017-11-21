import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';
import { Order } from '../models/order';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private cartService: ShoppingCartService
  ) { }

  getOrder(id?: string) {
    return !id ? 
      this.db.list('/orders').valueChanges() :
      this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(id)).valueChanges();
  }

  async storeOrder(order) {
    let result = this.db.list('/orders').push(order);
    this.cartService.clearCart();
    return result;
  }
}
