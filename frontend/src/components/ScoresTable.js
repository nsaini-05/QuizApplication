import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllScores } from '../actions/userActions'
import Alert from '../components/Alert'
import '../css/table_style.css'

const ScoresTable = ({ history }) => {
  const { scoreTable, error } = useSelector(state => state.score)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllScores())
  }, [dispatch])

  const handleClick = () => {
    dispatch({ type: 'SELECT_ANSWER_RESET' })
    history.push('/')
  }

  return (
    <>
      {error ? (
        <Alert message={'Trouble Fetching Scores Try Again!'} />
      ) : (
        <>
          <div className='container'>
            <h3 className='tertiary-heading'>Top Scores </h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>

              <tbody>
                {scoreTable &&
                  scoreTable.map(score => (
                    <tr key={score._id}>
                      <td>{score.name}</td>
                      <td>{score.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <button className='btn--form' onClick={handleClick}>
              Take Quiz
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default ScoresTable
