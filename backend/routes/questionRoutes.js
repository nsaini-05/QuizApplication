import express from 'express'
const router = express.Router()

import {
  getRandomQuestion,
  checkAnswer
} from '../controllers/questionControllers.js'

//@desc Geta Single Question
//@route GET /question
//@acess Public
router.get('/', getRandomQuestion)
router.post('/', checkAnswer)

export default router
