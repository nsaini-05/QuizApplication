export const saveUser = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_NAME':
      return { name: action.payload }

    case 'USER_RESET':
      return {}

    default:
      return state
  }
}

export const scoreReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_SCORE':
      return {
        score: action.payload,
        ...state
      }

    case 'GET_SCORE_TABLE': {
      return {
        ...state,
        scoreTable: action.payload
      }
    }

    case 'GET_SCORE_TABLE_FAIL':
    case 'SAVE_SCORE_FAIL': {
      return { error: action.payload }
    }

    case 'SCORE_RESET':
      return {}
    default:
      return state
  }
}
