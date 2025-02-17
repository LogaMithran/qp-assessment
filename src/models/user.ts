import {DataTypes, Model} from "sequelize";
import {sequelizeConnector} from "../connectors/rdsConnector";

export interface userAttributes {
    id: number;
    name: string;
    email: string;
}

export type userOptionalAttributes = keyof userAttributes;

export class Users extends Model<
    userAttributes,
    userOptionalAttributes
> {
}

Users.init(
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize: sequelizeConnector,
        tableName: "Users",
        timestamps: false
    }
);
