import React, { useState, useEffect } from 'react'
import { saveUserName } from '../actions/userActions'
import { useDispatch } from 'react-redux'
import '../css/homeScreen_style.css'

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'USER_RESET' })
    dispatch({ type: 'QUESTION_RESET' })
    dispatch({ type: 'SCORE_RESET' })
    document.body.style.backgroundColor = '#fdf2e9'
  }, [dispatch])

  const [name, setName] = useState('')

  const handleSubmit = () => {
    if (name !== '') {
      dispatch(saveUserName(name))
      history.push('/question')
    }
  }
  return (
    <>
      <div className='dialog'>
        <form className='cta-form' action='#'>
          <label htmlFor='full-name'>Full Name</label>
          <input
            type='text'
            placeholder='John Smith'
            id='full-name'
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className='btn--form' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default HomeScreen
