'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([queryInterface.addColumn('grocery_product_units', 'unit_category', {
                type: Sequelize.DataTypes.STRING
            }, {transaction: t},),]);
        })
    }, async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([queryInterface.removeColumn('grocery_product_units', 'unit_category', {transaction: t}),]);
        });
    }
};
