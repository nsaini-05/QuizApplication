import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  getRandomQuestionReducer,
  answerReducer
} from './reducers/questionReducers'

import { saveUser, scoreReducer } from './reducers/userReducers'
const reducers = combineReducers({
  question: getRandomQuestionReducer,
  answer: answerReducer,
  user: saveUser,
  score: scoreReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
