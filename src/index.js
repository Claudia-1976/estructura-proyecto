const logger = require('morgan')
const express = requier('express')



const configuracionApi = (app ) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(logger('dev'))
    return;
}

const init =() => {
    const app = express()  // creo la instancia de express
    configuracionApi(app)
    app.listen(5000)
    
    console.log('La aplicacion se esta ejecutando')
}

init();