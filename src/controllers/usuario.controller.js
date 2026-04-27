module.exports = {

    listar: async (req,res) => {

    },

    listarInfo: async (req,res) => {
        
    },

    crear: async (req,res) => {
        
    },

    prueba: async (req,res) => {

        try{

            res.json({
                message:"Hola mundo"
            })

        }catch(err){
            console.log(err)
        }
        
    }


}