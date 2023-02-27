import axios from 'axios'
export const getQuestion = () => async dispatch => {
  try {
    dispatch({ type: 'GET_QUESTION_REQUEST' })

    const { data } = await axios.get('/api/')
    dispatch({ type: 'GET_QUESTION_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'GET_QUESTION_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const selectAnswer = option => async dispatch => {
  dispatch({ type: 'SELECT_ANSWER_OPTION', payload: option })
}

export const checkAnswer = (id, answer) => async dispatch => {
  try {
    dispatch({ type: 'CHECK_ANSWER_REQUEST' })
    const { data } = await axios.post('/api/', { id, answer })

    dispatch({ type: 'CHECK_ANSWER_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'CHECK_ANSWER_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
