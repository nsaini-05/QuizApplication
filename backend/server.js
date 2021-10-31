import express from 'express'
import questionRoutes from './routes/questionRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use('/', questionRoutes)

app.listen(5000 || process.env.PORT, () => {
  console.log(
    `Server Started on port ${process.env.PORT} in ${process.env.NODE_ENV}`
  )
})
