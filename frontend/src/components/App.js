import React from 'react'
import ReactDom from 'react-dom'

import Homepage from './Homepage'
import Login from './Login'
import Account from './CreateAccount'
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom'

const App  = () => {
  return (
  <>
    <Router>
      <Switch>
        <Route exact path ='/'>
          <Homepage />
        </Route>
        <Route path ='/login'>
          <Login />
        </Route>
        <Route path ='/signup'>
          <Account />
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App