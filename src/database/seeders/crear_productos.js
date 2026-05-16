'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return Promise.all([
                models.producto.findOrCreate({
                    where: {
                        id: "1"
                    },
                    defaults: {
                        codigo = 'A1',
                        descripcion: "Producto 1"
                        
                    }
                }),
                models.producto.findOrCreate({
                    where: {
                        id: "2"
                    },
                    defaults: {
                        codigo = 'A2',
                        descripcion: "Producto 2"
              
                    }
                })
            ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
