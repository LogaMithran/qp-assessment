import {DataType, DataTypes, Model, Optional, Sequelize} from 'sequelize';
import {sequelizeConnector} from "../connectors/rdsConnector";
import {GroceryProductUnits} from "./grocery_product_units.model";

export interface GroceryProductsAttributes {
    id: number;
    product_name: string;
    category: string;
    is_deleted: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

export type GroceryProductsOptionalAttributes = keyof GroceryProductsAttributes
export type GroceryProductsCreationAttributes = Optional<
    GroceryProductsAttributes,
    GroceryProductsOptionalAttributes
>;

export class GroceryProducts extends Model<
    GroceryProductsAttributes, GroceryProductsCreationAttributes
> {
}

GroceryProducts.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {type: DataTypes.STRING},
    is_deleted: {type: DataTypes.DATE},
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE}
}, {
    sequelize: sequelizeConnector,
    tableName: 'grocery_products',
});
