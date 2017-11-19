import { CartItem } from './cart-item';
import { Product } from './product';

export class Cart {
    items: CartItem[] = [];
    dateCreated: string;

    constructor(public itemsMap: { [productId: string]: CartItem }) { 
        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            let cartItem = new CartItem();
            Object.assign(cartItem, item);
            cartItem.$key = productId;
            this.items.push(cartItem);
        }
    }

    get totalItemCount() { 
        let count = 0;
        for (let productId in this.items)
            count += this.items[productId].quantity;
        return count;
    }

    get totalPrice() {
        let totalPrice = 0;
        for (let productId in this.items)
            totalPrice += this.items[productId].totalPrice;
        return totalPrice;
    }

    getQuantity(product: Product) {  
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }
}