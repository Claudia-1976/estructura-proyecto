const router = require("express").Router();

const productoController  = require('../controllers/producto.controller.js')

router.get('/prueba', productoController.prueba)
router.get('/',productoController.listar)
router.post('/',productoController.crear)
router.post('/:idProducto',productoController.listarInfo)

module.exports = router;