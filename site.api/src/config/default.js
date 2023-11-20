import dotenv from 'dotenv'

// router
/* import express from 'express'
const router = express.Router(); */

// .env
dotenv.config();

const config = {
  PORT: process.env.PORT || 4001,
  NODE_ENV: process.env.NODE_ENV || 'dev',
  DB_URL: process.env.DB_URL,

  //router: router,
}

export default config