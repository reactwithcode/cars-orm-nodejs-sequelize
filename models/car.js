'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    // 6a customize model value
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kubikasi_mesin: {
      type: DataTypes.INTEGER
    },
    transmisi: { 
      type: DataTypes.STRING
    },
    penggerak_roda: { 
      type: DataTypes.STRING
    },
    // 6c
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      type: DataTypes.DATE, 
    },
    // 7 sequelize db:migrate
    // 8 seeder: mengirim data ke table otomatis
    // 8a sequelize seed:generate --name cars_model
    }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};