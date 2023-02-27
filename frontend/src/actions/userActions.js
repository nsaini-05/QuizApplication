import axios from 'axios'
export const saveUserName = name => async dispatch => {
  dispatch({ type: 'GET_USER_NAME', payload: name })
}

export const saveScore = (name, score) => async dispatch => {
  try {
    const { data } = await axios.post('/api/score', { name, score })
    dispatch({ type: 'SAVE_SCORE', payload: data })
  } catch (error) {
    dispatch({
      type: 'SAVE_SCORE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const getAllScores = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/score')
    dispatch({ type: 'GET_SCORE_TABLE', payload: data })
  } catch (error) {
    dispatch({
      type: 'GET_SCORE_TABLE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
