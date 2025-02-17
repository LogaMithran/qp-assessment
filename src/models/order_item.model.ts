import {DataTypes, Model, Optional} from 'sequelize';
import {sequelizeConnector} from "../connectors/rdsConnector";
import {Order} from "./order.model";

export interface OrderItemAttributes {
    id: number;
    name: string;
    description: string;
    item_value: number;
    order_id: number
    qty_ordered: number;
    createdAt: Date;
    updatedAt: Date;
}

export type OrderItemOptionalAttributes = keyof OrderItemAttributes
export type OrderItemCreationAttributes = Optional<
    OrderItemAttributes,
    OrderItemOptionalAttributes
>;

export class OrderItem extends Model<
    OrderItemAttributes, OrderItemCreationAttributes
> {
}

OrderItem.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Order,
            key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    item_value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        defaultValue: 0.0
    },
    qty_ordered: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE}
}, {
    sequelize: sequelizeConnector,
    tableName: 'order_item',
});
