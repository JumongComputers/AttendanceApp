import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import route from './routes/routes.js'

dotenv.config()

const app = express()

app.use(express.json())



mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(()=>{  
    console.log('database connected')
    app.listen(8080, 'localhost', () => {
      console.log('Server running on port http://localhost:8080')
    })
  
  })
  .catch((error)=>{
console.log('db connection error', error)
  })