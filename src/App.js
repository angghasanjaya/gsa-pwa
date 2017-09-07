import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Category, Project } from './pages';
import Transition from './TransitionWrapper'

const App = () => {
  return(
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/category">
          <Category/>
        </Route>
        <Route path="/project">
          <Project/>
        </Route>
      </Switch>
      
  )
}

export default App;