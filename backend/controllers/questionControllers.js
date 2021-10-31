import asyncHandler from 'express-async-handler'
import questions from '../data/Questions.js'

function random_item (items) {
  return items[Math.floor(Math.random() * items.length)]
}

export const getRandomQuestion = asyncHandler(async (req, res) => {
  await random_item(questions)
  res.status(200).json({ question })
})
