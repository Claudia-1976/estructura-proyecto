'use strict';

const models = require("../models/index");
const bcrypt = require('bcryptjs');


module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Gonzalez",
                    email: "emailJuan@email.com",
                    dni:25063198,
                    edad: 25,
                    password: bcrypt.hashSync('123456')
                }
            }),
            models.usuario.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Pedro",
                    apellido: "Gomez",
                    email: "emailPedro@email.com",
                    dni:54417207,
                    edad: 67,
                    password: bcrypt.hashSync('654321')
                }
            })
        ])
    },
};