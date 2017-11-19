import { Observable } from 'rxjs/Observable';
import { CartItem, Cart } from './../models/cart';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database/interfaces';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<Cart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object(`shopping-carts/${cartId}`).valueChanges<Cart>()
      .map(cart => new Cart(cart.items || {}));
  }

  private getCartItem(cartId: string, productId: string) {
    return this.db.object(`shopping-carts/${cartId}/items/${productId}`);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      cartId = await this.create().key;
      localStorage.setItem('cartId', cartId);
    }
    return cartId;
  }

  async updateCart(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getCartItem(cartId, product.key);
    item$.valueChanges().take(1).subscribe(item => {
      item$.update({ 
        product: product, 
        quantity: item ? item['quantity'] + change : 1 
      })
    });
  }
}
