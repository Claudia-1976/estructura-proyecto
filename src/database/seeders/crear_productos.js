'use strict';

const models = require("../models/index");

module.exports = {
    async up (queryInterface, Sequelize) {
        return Promise.all([
                models.producto.findOrCreate({
                    where: {
                        id: "1"
                    },
                    defaults: {
                        codigo :11,
                        descripcion: "Producto 1"
                        
                    }
                }),
                models.producto.findOrCreate({
                    where: {
                        id: "2"
                    },
                    defaults: {
                        codigo : 22,
                        descripcion: "Producto 2"
              
                    }
                })
            ])
  },

  
};