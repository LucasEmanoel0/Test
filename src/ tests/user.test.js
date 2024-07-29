import supertest from 'supertest'
import app from '../index.js'

describe("POSTT /user",()=>{
    it('criando dados no bd',async ()=>{

        let user = {
            nome:"davi",
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

    it('recusando dados vazios',async ()=>{

        let user = {
            nome:"",
            senha:"lucasemanoel",
            email:"",
            dataNascimento:"2002-12-25"
        }
           try {
            await supertest(app).post('/criar').send(user).expect(400).expect(res=>{
                let {message} = res.body
                console.log(message)
                expect(message).toBe("Preencha todos os dados")
            })
           } catch (error) {
            console.log(error)
            
           }
        
    })

})



