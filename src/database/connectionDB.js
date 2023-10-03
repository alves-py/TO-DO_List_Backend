import 'dotenv/config.js'

import pkg from 'pg'
const { Pool } = pkg

const connectionDB = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
})

export default connectionDB
