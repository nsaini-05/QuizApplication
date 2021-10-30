import React from 'react'
import { Link } from 'react-router-dom'
const HomeScreen = () => {
  return (
    <>
      <div className='dialog'>
        <Link to='/question' className='btn btn--start'>
          Start Quiz
        </Link>
      </div>
    </>
  )
}

export default HomeScreen
