import asyncHandler from 'express-async-handler'
import questions from '../data/Questions.js'
import Question from '../models/questionModel.js'

export const getRandomQuestion = asyncHandler(async (req, res) => {
  const count = await Question.find().count()
  const rand = Math.floor(Math.random() * count)
  const question = await Question.findOne().skip(rand)

  if (question) {
    res.status(200).json(question)
  } else {
    res.status(404)
    throw new Error('Oops Having trouble getting you Question')
  }
})

export const checkAnswer = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.body.id).select('options')
  if (!question) {
    res.status(404)
    throw new Error('Question not found')
  }

  const result = await question.options.find(
    option => option.value === req.body.answer
  )

  // console.log(result)

  if (result.isCorrect) {
    res.status(200).json({ success: true })
  } else {
    res.status(200).json({ success: false })
  }
})
