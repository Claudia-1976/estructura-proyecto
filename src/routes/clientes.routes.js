const router = require("express").Router();

const productoController  = require('../controllers/cliente.controller.js')

router.get('/prueba', productoController.prueba)
router.get('/',productoController.listar)
router.post('/',productoController.crear)
router.post('/:nrodoc',productoController.listarInfo)

module.exports = router;