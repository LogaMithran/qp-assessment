export interface ProductUnit {
    item_sku: string;
    unit_category: string;
    units: number;
    price: number;
    expiry: Date;
}

export interface Product {
    product_name: string;
    category: string;
    product_units: ProductUnit[];
}

export interface ProductBody extends Product {
}

export interface Cart {
    item_sku: string,
    units: number
}

export interface CartOrder {
    user_id: number,
    cart: Cart[]
}