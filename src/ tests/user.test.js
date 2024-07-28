import supertest from 'supertest'
import app from '../index.js'

describe("POSTT /user",()=>{
    it('criando dados no bd',async ()=>{

        let user = {
            nome:"lucas",
            senha:"lucasemanoel",
            email:"lucas@gmail.com",
            dataNascimento:"2002-12-25"
        }

           try {
            await supertest(app).post('/criar').send(user).expect(201).expect(res=>{
                let {message} = res.body
                console.log(message)
                expect(message).toBe("Usuario criado com sucesso")
            })
           } catch (error) {
            console.log(error)
            
           }
        
    })
})



