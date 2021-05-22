import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../login/Login.js'
import Posts from '../posts/Posts.js'
import Create from '../posts/Create.js'

const App = () => {
  return (
    <div>
      <h1>Welcome to my ReactJS app!</h1>
      <p>by <strong>Miguel Alexandre</strong> @2021</p>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/posts' component={Posts} />
          <Route path='/create' component={Create} />
          <Route path='/'>
            <p>Home page!</p>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
