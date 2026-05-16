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
                    email: "cilarragorri@gmail.com",
                    edad: 50
                }
            }),
            models.cliente.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Fermin",
                    apellido: "Velazquez",
                    email: "fermin.bsso@gmail.com",
                    edad: 18
                }
            })
        ])
    },
};