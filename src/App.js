import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import React from 'react';
import Login from './login';
import SignUp from './signup';
import Forgotpwd from './forgotpwd';
import Home from './home';

function App() {
  return (
    <div className="App">
          <Router>
              <Switch>
                  <Route path='/' exact  component={Login}/>
                  <Route path='/home' exact component={Home}/>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/forgotpwd' component={Forgotpwd}/>    
              </Switch>
          </Router>
    </div>
  );
}

export default App;
