import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import '../App.css';


class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }


  changeHandler = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  submitForm = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:5100/api/auth/login';

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        console.error('Login Error', err);
      });
  };

  render() {
    return (
      <div className="form-wrap">
        <form className='login' onSubmit={this.submitForm}>
          <div className="sign-header">
            <h3 className='cat-head'>Sign In</h3>
          </div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={this.state.username}
            className='in user'
            placeholder="Username"
            onChange={this.changeHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            className='in pass'
            placeholder="Password"
            onChange={this.changeHandler}
          />
          <button type='submit' className='actButton' >Log In!</button>
          <p>
            Sign in below to access your dashboard. Don't have an account yet?
            <br></br>
            <Link to="/sign-up">Create one here.</Link>
          </p>
        </form>
        <div />
      </div>
    )
  }
}

export default LoginForm;