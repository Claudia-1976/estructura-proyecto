const {Router} = require("express")

const usuarioRoutes= require('./usuario.routes')
const productoRoutes= require('./productos.routes')
const clienteRoutes= require('./clientes.routes')


const rutas_init = () => {
    const router =Router()

    router.use("/usuarios", usuarioRoutes)
    router.use("/productos",productoRoutes)
    router.use("/clientes",clienteRoutes)

    return router
};


module.exports = {rutas_init}