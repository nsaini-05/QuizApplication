import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionScreen from './screens/QuestionScreen'
import ScoresTable from './components/ScoresTable'
const App = () => {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/question' component={QuestionScreen} exact />
      <Route path='/scoretable' component={ScoresTable} exact />
    </Router>
  )
}

export default App
