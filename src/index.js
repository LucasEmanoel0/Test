import express from 'express'
import router from './router/routes.js'
import dotenv from 'dotenv'


dotenv.config()
const app = express()
const port = 5001

app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`esta rodando na porta ${port} http://localhost:${port} `)
})
export default app