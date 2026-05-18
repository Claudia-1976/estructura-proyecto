
const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    listar: async (req,res,next) => {
           try {
                   const clients = await models.cliente.findAll(
                    {
                    include:[{
                        model:models.cliente_producto,
                        include:[{
                          model:models.producto
                        }]
                    }]    
                   }
                   )
       
                   res.json({
                       success: true,
                       data: {
                           clientes: clients
                       }
                   })
       
               } catch (err) {
                   return next(err)
               }
    },

    listarInfo: async (req,res,next) => {
            try {
                    const client = await models.cliente.findOne({
                        where: {
                            id: req.params.idCliente
                        }
                    })            
                    if(!client) return next(errors.clienteInexistenes)
        
                    res.json({
                        success: true,
                        data: {
                            cliente: client
                        }
                    })
        
                } catch (err) {
                    return next(err)
                }
        
    },

    crear: async (req,res,next) => {
        try {
            const client = await models.cliente.create(req.body)

            res.json({
                success: true,
                data: {
                    id: client.id
                }
            })

        } catch (err) {
            return next(err)
        }
        
    },

    prueba: async (req,res) => {

        try{

            res.json({
                message:"Prueba Clientes"
            })

        }catch(err){
            console.log(err)
        }        try {
            console.log('ejecutando prueba')

            res.json({
                message: "Hola mundo"
            })

        } catch (err) {
            console.log(err)
        }
        
    }


}