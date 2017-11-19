import { CartItem } from './cart';
import { Product } from './product';

export class Cart {
    items: CartItem[] = [];
    dateCreated: string;

    constructor(public itemsMap: { [productId: string]: CartItem }) { 
        for (let productId in itemsMap)
            this.items.push(itemsMap[productId]);
    }

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