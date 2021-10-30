import React from 'react'

const QuestionScreen = () => {
  return (
    <div className='question_container'>
      <div class='question_text'>
        <span className='subheading'>Question 1</span>
        <h2 className='tertiary-heading'>Lorem ipsum dolor sit amet?</h2>
        <div class='options'>
          <div class='option'>Option 1</div>
          <div class='option'>Option 1</div>
          <div class='option'>Option 1</div>
        </div>
        <button className='btn--form'>Submit</button>
      </div>
    </div>
  )
}

export default QuestionScreen
