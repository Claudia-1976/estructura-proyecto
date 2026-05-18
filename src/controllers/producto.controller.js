const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    listar: async (req,res,next) => {
        try {
                const products = await models.producto.findAll()
    
                res.json({
                    success: true,
                    data: {
                        productos: products
                    }
                })
    
            } catch (err) {
                return next(err)
            }
    },

    listarInfo: async (req,res,next) => {
            try {
                    const product = await models.producto.findOne({
                        where: {
                            id: req.params.idProducto
                        }
                    })            
                    if(!product) return next(errors.UsuarioInexistente)
        
                    res.json({
                        success: true,
                        data: {
                            producto: product
                        }
                    })
        
                } catch (err) {
                    return next(err)
                }
          
    },

    crear: async (req,res,next) => {
        try {
            const product = await models.producto.create(req.body)

            res.json({
                success: true,
                data: {
                    id: product.id
                }
            })

        } catch (err) {
            return next(err)
        }
        
    },

    prueba: async (req,res) => {

        try{

            res.json({
                message:"Prueba Productos"
            })

        }catch(err){
            console.log(err)
        }
        
    }


}