import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Home from '../screen/home'
import Music from '../screen/music'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/music' component={Music} />
        <Redirect to='/home'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
