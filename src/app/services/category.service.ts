import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFireList } from 'angularfire2/database/interfaces';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list(
      'categories', 
      ref => ref.orderByChild('name')
    );
  }
}
