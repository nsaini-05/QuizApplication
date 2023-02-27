import React from 'react'
import { useDispatch } from 'react-redux'
import { selectAnswer } from '../../../actions/questionActions'

const Option = ({ option }) => {
  const dispatch = useDispatch()
  const handleChange = e => {
    dispatch(selectAnswer(e.target.value))
  }

  return (
    <label htmlFor={option.label} id='a_text'>
      <div className='option' key={option._id}>
        <input
          type='radio'
          name='answer'
          id={option.label}
          className='answer'
          onChange={handleChange}
          value={option.value}
        />
        {option.label}. {option.value}
      </div>
    </label>
  )
}

export default Option
