import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Component/Header'

import Home from './Screens/Home'
import Register from './Screens/Register' 
import Login from './Screens/Login'

function App() {
  return (

    <Router>
      <div>
        
        <Header></Header>
        
        <Switch> 
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
 