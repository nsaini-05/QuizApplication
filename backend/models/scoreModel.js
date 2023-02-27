import mongoose from 'mongoose'

const scoreSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'true'
  },
  score: {
    type: Number,
    required: 'true'
  }
})

const Score = mongoose.model('Score', scoreSchema)

export default Score
