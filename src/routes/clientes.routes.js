const router = require("express").Router();

const clienteController  = require('../controllers/cliente.controller.js')

router.get('/prueba', clienteController.prueba)
router.get('/',clienteController.listar)
router.post('/',clienteController.crear)
router.post('/:nrodoc',clienteController.listarInfo)

module.exports = router;