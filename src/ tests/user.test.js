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
                expect(message).toBe("Usuario criado com sucesso")
            })
           } catch (error) {
            console.log("criando dados no bd "+ error)
            console.log(res.body.message)
            
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
                expect(message).toBe("Preencha todos os dados")
            })
           } catch (error) {
            console.log("recusando dados vazios"+error)
            console.log(res.body.message)
            
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
                expect(message).toBe("Usuario autenticado")
               })
            
        } catch (error) {
            console.log(`error é ${error} `)
            console.log(res.body.message)
            
        }

    })
    it('Login não encontrado',async ()=>{
        let user = {
            senha:"lucasemanoel",
            email:"rafael@gmail.com"
        }
        try {
            await supertest(app).post('/login').send(user).expect(404).expect((res)=>{
                let {message} = res.body
                expect(message).toBe("Usuario não encontrado")
            })
            
        } catch (error) {
            console.log("login não encontrado " + error)
            
        }
        
    })
    it('Dados nao preenchidos',async ()=>{
        let user = {
            senha:"lucasemanoel",
            email:""
        }
        try {
            await supertest(app).post('/login').send(user).expect(400).expect((res)=>{
                let {message} = res.body
                expect(message).toBe("Email e senha são obrigatarios")
            })
            
        } catch (error) {
            console.log("dados não preenchidos " + error.message)
            
        }
        
    })

})

describe("PATCH /update",()=>{
    it('senha atualizada com sucesso',async ()=>{
        let user  = {
            email:"lucas@gmail.com",
            senha:"lucasemanoel",
            NovaSenha:"itachi007"
        }
        try {
            await supertest(app).patch('/update').send(user).expect(200).expect((res)=>{
                let {message} = res.body
                expect(message).toBe("Senha trocado com sucesso")
            })
            
        } catch (error) {
            console.log(error)
            console.log(res.body.message)
            
        }

        

    })

    it('Usuario não encontrado',async ()=>{
        let user  = {
            email:"jhon@gmail.com",
            senha:"lucasemanoel",
            NovaSenha:"itachi007"
        }
        try {
            await supertest(app).patch('/update').send(user).expect(400).expect((res)=>{
                let {message} = res.body
                expect(message).toBe("Usuario não encontrado")
            })
            
        } catch (error) {
            console.log(error)
            
        }

        

    })

    it('Dados não preenchidos',async ()=>{
        let user  = {
            email:"lucas@gmail.com",
            senha:"lucasemanoel",
            NovaSenha:""
        }
        supertest(app).patch('/update').send(user).expect(400).expect((res)=>{
            try {
                let {message} = res.body
                expect(message).toBe("email,senha atual e nova senha são obrigatorios")
                
            } catch (error) {
                console.log(error)
                console.log(res.body.message)
                
            }
            
        })
    })

    
})

describe("GET /USER",()=>{
   it('Usuario encontrado',async()=>{
    let user = {
        senha:"itachi007",
        email:"lucas@gmail.com"
    }
    supertest(app).get('/usuario').send(user).expect(200)
   })

   it('Usuario não encontrado',async()=>{
    let user = {
        senha:"lucas",
        email:"lucas@gmail.com"
    }
    supertest(app).get('/usuario').send(user).expect(400).expect((res)=>{
        let {message} = res.body
        expect(message).toBe("Usuario nao encontrado")
    })
   })

   it('Senha e email nao preenchidos',async()=>{
    let user = {
        senha:"",
        email:"lucas@gmail.com"
    }
    supertest(app).get('/usuario').send(user).expect(400).expect((res)=>{
        let {message} = res.body
        expect(message).toBe("email e senha são obrigatorios")
    })
   })


})



