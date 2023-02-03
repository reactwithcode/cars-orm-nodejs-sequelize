'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   // 8b bulk insert: mengisi banyak file bersamaan ke Table Cars
   return queryInterface.bulkInsert('Cars', [{
    name: 'Avanza 1.3 G',
    kubikasi_mesin: 1300,
    transmisi: 'automatic',
    penggerak_roda: 'fwd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Avanza 1.3 G',
    kubikasi_mesin: 1300,
    transmisi: 'manual',
    penggerak_roda: 'fwd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Avanza 1.3 E',
    kubikasi_mesin: 1300,
    transmisi: 'automatic',
    penggerak_roda: 'fwd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Kijang Innova G',
    kubikasi_mesin: 2000,
    transmisi: 'automatic',
    penggerak_roda: 'fwd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Kijang Innova G',
    kubikasi_mesin: 2000,
    transmisi: 'manual',
    penggerak_roda: 'fwd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Agya 1.3 G',
    kubikasi_mesin: 1200,
    transmisi: 'manual',
    penggerak_roda: 'fwd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Agya 1.3 G',
    kubikasi_mesin: 1300,
    transmisi: 'automatic',
    penggerak_roda: 'fwd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]);
  },

  async down (queryInterface, Sequelize) {
    // 8b undo all data
    // 8c sequelize db:seed:all ===> running all seeds in seeders. sequelize db:seed --name cars_model ===> running cars_model seeder only
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
