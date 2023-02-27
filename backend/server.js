import express from 'express'
import questionRoutes from './routes/questionRoutes.js'
import scoreRoutes from './routes/scoreRoutes.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import {
  notFoundErrorHandler,
  errorHandler
} from './middlewares/errorHandler.js'
import cors from 'cors'
dotenv.config()
import path from 'path'
const app = express()
app.use(cors())

connectDB()

app.use(express.json())

app.use('/api', questionRoutes)
app.use('/api', scoreRoutes)

app.use(notFoundErrorHandler)
app.use(errorHandler)

//Serve Static Assets
if(process.env.NODE_ENV==='PRODUCTION'){
  app.use(express.static('client/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(5000 || process.env.PORT, () => {
  console.log(
    `Server Started on port ${process.env.PORT} in ${process.env.NODE_ENV}`
  )
})
