const express = require('express')
const routerConfig = require('./routes/index.routes.js')
globalConstants = require('./const/globalConstants')
const logger = require('morgan')

const configuracionApi = (app ) => {
    app.use(express.json())  // para que express entieda json
    app.use(express.urlencoded({extended: true})) //para que express entienda formulario
    app.use(logger('dev'))
    
}

const configuracionRouter = (app) => {
    app.use('/api/',routerConfig.rutas_init())
    app.use('/', routerConfig.rutas_auth())

}
const init =() => {
    const app = express()  // creo la instancia de express
    configuracionApi(app)
    configuracionRouter(app)
    app.listen(globalConstants.PORT)
    
    console.log('La aplicacion se esta ejecutando en el puerto: ' +globalConstants.PORT)
}

init();