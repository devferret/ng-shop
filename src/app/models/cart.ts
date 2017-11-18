import { Product } from './product';

export interface Cart {
    items: CartItem[],
    dateCreated: string
}

export interface CartItem {
    product: Product,
    quantity: number
}