import express from 'express'
const router = express.Router()

import { saveScore, getScores } from '../controllers/scoreController.js'

router.post('/score', saveScore)
router.get('/score', getScores)
export default router
