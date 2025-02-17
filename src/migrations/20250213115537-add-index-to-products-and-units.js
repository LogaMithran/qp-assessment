'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addIndex("grocery_products", ["is_deleted"]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeIndex("grocery_products", ["is_deleted"]);
    }
};
