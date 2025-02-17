'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('grocery_products', 'is_deleted', {
                    type: Sequelize.DataTypes.DATE,
                }, {transaction: t},),
                queryInterface.addColumn('grocery_product_units', 'is_deleted', {
                    type: Sequelize.DataTypes.DATE,
                }, {transaction: t},)]);
        })
    }, async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('grocery_products', 'is_deleted', {transaction: t}),
                queryInterface.removeColumn('grocery_product_units', 'is_deleted', {transaction: t})
            ]);
        });
    }
};
