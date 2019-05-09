import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Header from './navbar/Header';
import LoginForm from './auth/Login';
import SignUp from './auth/SignUp';
import Users from './users/Users';

import './App.css';


function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path='/login' component={LoginForm} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/users' component={Users} />
    </div>
  );
}

export default App;
