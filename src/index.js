const express = require('express')

globalConstants = require('./const/globalConstants')

const configuracionApi = (app ) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
   
    return;
}

const init =() => {
    const app = express()  // creo la instancia de express
    configuracionApi(app)
    app.listen(globalConstants.PORT)
    
    console.log('La aplicacion se esta ejecutando')
}

init();