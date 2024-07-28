
import pool from "../database/database"


export default {
    newCount: async (req,res)=>{
        let {nome,senha,email,dataNascimento} = req.body
        try {
            let result = await pool.query('INSERT INTO USER (name,email,password,dataNascimento) VALUES ($1,$2, $3, $4)',[nome,senha,email,dataNascimento])

            if(result.rows > 0){
                res.status(201).send({message:"usuario criado com sucesso"})
                console.log(result)
            }else{
                res.status(500).send({message:"erro ao criar usuario"})
            }
            
        } catch (error) {
            console.log(error)
            res.status(500).send({message:"error"})
            
        }  

    }
}