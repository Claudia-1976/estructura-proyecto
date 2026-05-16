const {Router} = require("express")

const usuarioRoutes= require('./usuario.routes')
const productoRoutes= require('./productos.routes')
const clienteRoutes= require('./clientes.routes')

const authRoutes = require("./auth.routes")

const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init = () => {
    const router =Router()

    router.use("/usuarios", decodeJWT,usuarioRoutes)
    router.use("/productos",productoRoutes)
    router.use("/clientes",clienteRoutes)

    return router
};

const rutas_auth = () => {
  const router = Router()

  router.use("/auth", authRoutes)

  return router
}


module.exports = {rutas_init,rutas_auth}