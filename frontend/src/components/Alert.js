import React from 'react'

const Alert = ({ message }) => {
  return (
    <div className='container'>
      <div className='errorComponent'>
        <h2 class='tertiary-heading'>{message}</h2>
      </div>
    </div>
  )
}

export default Alert
