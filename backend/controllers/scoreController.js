import asyncHandler from 'express-async-handler'
import Score from '../models/scoreModel.js'

export const saveScore = asyncHandler(async (req, res) => {
  const { name, score } = req.body
  const createdScore = await Score.create({ name, score })
  res.status(201).json(createdScore)
})

export const getScores = asyncHandler(async (req, res) => {
  const scores = await Score.find({})
    .sort({ score: '-1' })
    .limit(10)
  res.status(200).json(scores)
})
