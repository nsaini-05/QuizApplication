import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Question from './models/questionModel.js'
import questions from './data/Questions.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Question.deleteMany()
    await Question.insertMany(questions)
    console.log('Data Imported Successfully')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

importData()
