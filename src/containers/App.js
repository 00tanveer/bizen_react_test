import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/register' component={RegisterPage}/>
      </div>
    );
  }
}

export default App;
