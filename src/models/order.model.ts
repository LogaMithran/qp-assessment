import {DataTypes, Model, Optional} from 'sequelize';
import {sequelizeConnector} from "../connectors/rdsConnector";

export interface OrderAttributes {
    id: number;
    order_status: string; // CREATED SHIPPED DELIVERED
    user_id: number;
    order_value: number;
    createdAt: Date;
    updatedAt: Date;
}

export type OrderOptionalAttributes = keyof OrderAttributes
export type OrderCreationAttributes = Optional<
    OrderAttributes,
    OrderOptionalAttributes
>;

export class Order extends Model<
    OrderAttributes, OrderCreationAttributes
> {
}

Order.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    order_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'CREATED'
    },
    order_value: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0.0
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE}
}, {
    sequelize: sequelizeConnector,
    tableName: 'order',
});
