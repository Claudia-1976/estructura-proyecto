const express = require('express')
const routerConfig = require('./routes/index.routes.js')
globalConstants = require('./const/globalConstants')

const configuracionApi = (app ) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
   
    return;
}

const configuracionRouter = (app) => {
    app.use('/api/',routerConfig.rutas_init())

}
const init =() => {
    const app = express()  // creo la instancia de express
    configuracionApi(app)
    configuracionRouter(app)
    app.listen(globalConstants.PORT)
    
    console.log('La aplicacion se esta ejecutando')
}

init();