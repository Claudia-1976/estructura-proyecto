'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.cliente_producto.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    clienteId: 1,
                    productoId:2
                }
            }),
           models.cliente_producto.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    clienteId: 1,
                    productoId:1
                }
            }),
            models.cliente_producto.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    clienteId: 2,
                    productoId:2
                }
            }),
        ])
    },
};