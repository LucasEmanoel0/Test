
import pool from "../database/database.js"


export default {
    newCount: async (req,res)=>{
        let {nome,senha,email,dataNascimento} = req.body

        if(!nome || !senha || !email || !dataNascimento){
            res.status(400).send({message:"Preencha todos os dados"})
            
        }else{
            try {
                let result = await pool.query('INSERT INTO "TEST" ("name","email","password","dataNascimento") VALUES ($1,$2, $3, $4)',[nome,email,senha,dataNascimento])
    
                if(result.rowCount > 0){
                    res.status(201).send({message:"Usuario criado com sucesso"})
                }else{
                    res.status(500).send({message:"erro ao criar usuario"})
                }
                
            } catch (error) {
                console.log("error ao inserir no banco de dados" + error)
                res.status(500).send(`erro : ${error.message}`)
                
            }  

        }

        
    }
}