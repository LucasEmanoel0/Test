import pg from 'pg'
const {Pool} = pg

const pool  = new Pool({
    database: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_USER,
    port: 5432,
})

export default pool

