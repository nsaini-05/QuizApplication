import mongoose from 'mongoose'

const optionSchema = mongoose.Schema({
  label: {
    type: String,
    required: 'true'
  },
  value: {
    type: String
  },
  isCorrect: {
    type: 'boolean',
    select: false
  }
})

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: 'true'
  },
  options: [optionSchema]
})

questionSchema.methods.getRandomQuestion = async function () {
  const count = await this.count()
  const rand = Math.floor(Math.random() * count)
  const randomDoc = await this.findOne().skip(rand)
  return randomDoc
}

const Question = mongoose.model('Question', questionSchema)
export default Question
