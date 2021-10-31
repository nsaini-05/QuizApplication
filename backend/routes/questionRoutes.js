import express from 'express'
const router = express.Router()

import { getRandomQuestion } from '../controllers/questionControllers.js'

//@desc Geta Single Question
//@route GET /question
//@acess Public
router.get('/', getRandomQuestion)

export default router
