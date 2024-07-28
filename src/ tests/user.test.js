import supertest from 'supertest'
import app from '../index.js'

describe("POSTT /user",()=>{
    it('criando dados no bd',async ()=>{
        let user = {
            name:"lucas",
            email:"lucas@gmail.com",
            password:"lucasemanoel",
            dataNascimento:"2002-12-25"
        }
            let test = await supertest(app).post('/user').send(user).expect(201).expect((res)=>{
                if(res.body.message  !== "Usuário criado com sucesso"){
                    throw new Error(`Expected message "Usuário criado com sucesso" but got "${res.body.message}"`);
                }else{
                    console.log("usuario criado com sucesso")
                }
            })
        return test
        
    })
})



