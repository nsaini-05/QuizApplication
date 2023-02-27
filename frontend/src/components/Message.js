import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveScore } from '../actions/userActions'

const Message = ({ score }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  document.body.style.backgroundColor = '#ff6b6b'
  const { name } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(saveScore(name, Number(score - 1)))
  }, [dispatch])

  const RetakeQuiz = () => {
    dispatch({ type: 'SELECT_ANSWER_RESET' })
    history.push('/')
  }

  const SeeScores = () => {
    dispatch({ type: 'SELECT_ANSWER_RESET' })
    history.push('/scoretable')
  }

  return (
    <>
      <div className='container'>
        <span className='subheading'>Your Score is : {score - 1}</span>
        <h2 className='tertiary-heading'>Thanks for taking the Quiz {name}</h2>
        <button className='btn--form' onClick={RetakeQuiz}>
          Retake Quiz
        </button>

        <button className='btn--form btn-secondary' onClick={SeeScores}>
          Score Table
        </button>
      </div>
    </>
  )
}

export default Message
