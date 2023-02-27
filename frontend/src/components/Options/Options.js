import React from 'react'

import Option from './Option/Option'
const Options = ({ options }) => {
  return (
    <div className='options'>
      {options.map(option => (
        <Option option={option} key={option._id} />
      ))}
    </div>
  )
}

export default Options
