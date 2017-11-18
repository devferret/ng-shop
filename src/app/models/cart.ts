import { CartItem } from './cart';
import { Product } from './product';

export class Cart {
    dateCreated: string

    constructor(public items: CartItem[]) { }

    get totalItemCount() {
        let count = 0;
        for (let productId in this.items)
            count += this.items[productId].quantity;
        return count;
    }
}

export interface CartItem {
    product: Product,
    quantity: number
}