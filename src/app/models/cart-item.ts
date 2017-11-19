import { Product } from './product';

export class CartItem {
  $key: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;

  get totalPrice(): number {
    return this.price * this.quantity;
  }
}