import React, { useEffect, useState } from 'react'
import { getQuestion, checkAnswer } from '../actions/questionActions'
import { useDispatch, useSelector } from 'react-redux'
import Options from '../components/Options/Options'
import Message from '../components/Message'
import Alert from '../components/Alert'
import '../css/questionScreen_style.css'
import { saveScore } from '../actions/userActions'

const QuestionScreen = ({ history }) => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const dispatch = useDispatch()
  const { questionWithOptions, error } = useSelector(state => state.question)
  const { name } = useSelector(state => state.user)

  const { selectedOption, success, message } = useSelector(
    state => state.answer
  )

  useEffect(() => {
    if (!name) {
      history.push('/')
    }
    dispatch(getQuestion())
    setQuestionNumber(questionNumber => questionNumber + 1)
  }, [dispatch, history, name])

  useEffect(() => {
    if (success) {
      document.body.style.backgroundColor = '#c3fae8'
      dispatch(getQuestion())
      setQuestionNumber(questionNumber => questionNumber + 1)
    }
  }, [success, dispatch])

  /*Submit Answer*/
  const handleSubmit = e => {
    if (selectedOption) {
      dispatch(checkAnswer(questionWithOptions._id, selectedOption))
    }
  }

  /*Save Score and Exit */
  const saveScoreExit = e => {
    dispatch(saveScore(name, questionNumber - 1))
    history.push('/')
  }

  return (
    <>
      {error ? (
        <Alert message={'Oops there is an error Try again!!'} />
      ) : message ? (
        <Message score={questionNumber} />
      ) : (
        questionWithOptions && (
          <>
            <div className='container'>
              <div className='question_text'>
                <span className='subheading'>Question {questionNumber}</span>
                <h2 className='tertiary-heading'>
                  {questionWithOptions.question}
                </h2>
                <Options options={questionWithOptions.options} />
                <button className='btn--form' onClick={handleSubmit}>
                  Submit
                </button>

                <button
                  className='btn--form btn-secondary'
                  onClick={saveScoreExit}
                >
                  Save
                </button>
              </div>
            </div>
          </>
        )
      )}
    </>
  )
}

export default QuestionScreen
