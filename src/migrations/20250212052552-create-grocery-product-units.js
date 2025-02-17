'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('grocery_product_units', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            expiry: {
                type: Sequelize.DATE
            },
            units: {
                type: Sequelize.INTEGER
            },
            item_sku: {
                type: Sequelize.STRING,
                unique: true,
            },
            product_id: {
                allowNull: false,
                type: Sequelize.INTEGER.UNSIGNED
            },
            price: {
                type: Sequelize.DECIMAL
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('grocery_product_units');
    }
};