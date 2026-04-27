module.exports = {

    listar: async (req,res) => {
         try{

            res.json({
                message:"Lista de Clientes"
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
                message:"Prueba Clientes"
            })

        }catch(err){
            console.log(err)
        }
        
    }


}