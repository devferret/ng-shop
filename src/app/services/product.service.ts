import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    this.db.list('products').push(product);
  }

  getAll() {
    return this.db.list('products').snapshotChanges().map(products => 
      products.map(product => {
        return { $key: product.payload.key, ...product.payload.val() }
      })
    );
  }

  get(productId) {
    return this.db.object(`products/${productId}`).valueChanges();
  }

  update(productId, product) {
    return this.db.object(`products/${productId}`).update(product);
  }

  delete(productId) {
    return this.db.object(`products/${productId}`).remove();
  }
} 
