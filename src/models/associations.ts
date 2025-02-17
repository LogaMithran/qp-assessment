import {GroceryProducts} from "./grocery_products.model";
import {GroceryProductUnits} from "./grocery_product_units.model";
import {Order} from "./order.model";
import {OrderItem} from "./order_item.model";

GroceryProducts.hasMany(GroceryProductUnits, {
    foreignKey: "id",
    as: "units",
});

GroceryProductUnits.belongsTo(GroceryProducts, {
    foreignKey: "product_id",
    as: "product",
});

Order.hasMany(OrderItem, {
    foreignKey: 'id',
    as: "item"
})

OrderItem.belongsTo(Order, {
    foreignKey: 'order_id',
    as: "order"
})