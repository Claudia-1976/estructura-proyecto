'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.cliente.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Claudia",
                    apellido: "Ilarragorri",
                    dni: 25063198
                }
            }),
            models.cliente.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Fermin",
                    apellido: "Velazquez",
                    dni:54417207
                }
            })
        ])
    },
};