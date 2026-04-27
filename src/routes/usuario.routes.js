const router = require("express").Router();

const usuarioController  = require('../controllers/usuario.controller.js')

router.get('/prueba', usuarioController.prueba)
router.get('/',usuarioController.listar)
router.post('/',usuarioController.crear)
router.post('/:idUsuario',usuarioController.listarInfo)

module.exports = router;