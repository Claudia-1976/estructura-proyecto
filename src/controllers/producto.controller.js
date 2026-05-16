const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    listar: async (req,res) => {
        try {
                const products = await models.productos.findAll()
    
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

    listarInfo: async (req,res) => {
            try {
                    const product = await models.productos.findOne({
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

    crear: async (req,res) => {
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