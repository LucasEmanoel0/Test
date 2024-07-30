import pg from 'pg'
const {Pool} = pg

const pool = new Pool({
    user: 'postgres',
    password: 'itachi007',
    host: process.env["DB_HOST"],
    port: 5432,
    database: 'postgres',
  })

export default pool

