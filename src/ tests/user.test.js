import supertest from 'supertest'
import app from '../index.js'

describe("POST /criar",()=>{
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

describe("POST  /login",()=>{

    it('Login de usuario feito com sucesso',async ()=>{
        let user = {
            senha:"lucasemanoel",
            email:"lucas@gmail.com"
        }

        try {
            await supertest(app).post('/login')
            .send(user)
            .expect(200)
            .expect((res)=>{
                let {message} = res.body
                console.log(message)
                expect(message).toBe("Usuario autenticado")
               })
            
        } catch (error) {
            console.log(`error é ${error} `)
            throw error 
            
        }

    })
    it('Login não encontrado',async ()=>{
        let user = {
            senha:"lucasemanoel",
            email:"rafael@gmail.com"
        }
        try {
            await supertest(app).post('/criar').send(user).expect(404).expect((res)=>{
                let {message} = res.body
                console.log(message)
                describe(message).toBe("Usuario não encontrado")
            })
            
        } catch (error) {
            console.log(error)
            
        }
        
    })
    it('Dados nao preenchidos',async ()=>{
        let user = {
            senha:"lucasemanoel",
            email:""
        }
        try {
            await supertest(app).post('/criar').send(user).expect(400).expect((res)=>{
                let {message} = res.body
                console.log(message)
                describe(message).toBe("Email e senha são obrigatarios")
            })
            
        } catch (error) {
            console.log(error)
            
        }
        
    })

})

describe("PATCH /user",()=>{
    it('senha atualizada com sucesso',async ()=>{
        

    })
})



