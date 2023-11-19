import config from '#root/src/config/default.js'
import mongoose from 'mongoose'

const URL = config.DB_URL;

console.log(URL)
mongoose.connect(URL)
.then(() => {
  console.log('connected to mongodb!!')
})
.catch((error) => {
  console.error('error connecting to db: ', error)
})

console.log('from db ---------')