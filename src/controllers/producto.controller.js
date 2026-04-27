module.exports = {

    listar: async (req,res) => {
         try{

            res.json({
                message:"Lista de Productos en existencia"
            })

        }catch(err){
            console.log(err)
        }
    },

    listarInfo: async (req,res) => {
        
    },

    crear: async (req,res) => {
        
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