import {DataTypes, Model, Optional} from 'sequelize';
import {sequelizeConnector} from "../connectors/rdsConnector";
import {GroceryProducts} from "./grocery_products.model";

export interface GroceryProductUnitAttributes {
    id: number;
    item_sku: string;
    product_id: number;
    units: number;
    expiry: Date;
    unit_category: string;
    price: number;
    is_deleted: Date,
    createdAt: Date;
    updatedAt: Date
}

export type GroceryProductUnitOptionalAttributes = keyof GroceryProductUnitAttributes

export type GroceryProductUnitCreationAttributes = Optional<
    GroceryProductUnitAttributes,
    GroceryProductUnitOptionalAttributes
>;

export class GroceryProductUnits extends Model<
    GroceryProductUnitAttributes,
    GroceryProductUnitCreationAttributes
> {
}

GroceryProductUnits.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    expiry: {type: DataTypes.DATE},
    units: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    item_sku: {
        allowNull: false,
        type: DataTypes.STRING
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: GroceryProducts,
            key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    unit_category: {
        type: DataTypes.STRING
    },
    price: {type: DataTypes.DECIMAL},
    is_deleted: {type: DataTypes.DATE},
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE}
}, {
    sequelize: sequelizeConnector,
    tableName: 'grocery_product_units',
});
