'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([queryInterface.addColumn('users', 'isadmin', {
                type: Sequelize.DataTypes.SMALLINT,
            }, {transaction: t},),]);
        })
    }, async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([queryInterface.removeColumn('users', 'isadmin', {transaction: t}),]);
        });
    }
};
