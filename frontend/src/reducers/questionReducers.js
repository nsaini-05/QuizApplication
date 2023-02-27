export const getRandomQuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_QUESTION_REQUEST':
      return { loading: true }
    case 'GET_QUESTION_SUCCESS':
      return {
        loading: false,
        questionWithOptions: action.payload
      }
    case 'GET_QUESTION_FAIL':
      return { loading: false, error: action.payload }

    case 'QUESTION_RESET':
      return {}
    default:
      return state
  }
}

export const answerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ANSWER_OPTION':
      return { selectedOption: action.payload }
    case 'CHECK_ANSWER_REQUEST':
      return { loading: true }
    case 'CHECK_ANSWER_SUCCESS':
      return {
        success: action.payload.success,
        message: action.payload.success ? null : 'InCorrect'
      }

    case 'SELECT_ANSWER_RESET':
      return {}

    default:
      return state
  }
}
