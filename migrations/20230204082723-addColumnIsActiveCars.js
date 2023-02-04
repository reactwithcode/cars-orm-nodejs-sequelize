'use strict';
// 10c
const { DataTypes } = require("sequelize");
const Car = require("../models/index");

// 10 sequelize migration:create --name addColumnIsActiveCars ===> alter adding new column
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Cars',
      'is_active',
     {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
     }
    );

    return
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Cars',
      'is_active'
    );
  }
};
