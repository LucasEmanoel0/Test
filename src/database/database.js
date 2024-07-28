import pg from 'pg'
const {Pool} = pg

const pool = new Pool({
    user: 'postgres',
    password: 'itachi007',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
  })

export default pool

