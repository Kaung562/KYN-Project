import React, { Component } from 'react';
import './style/register.css';
import axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      phoneNumber: ''
    };
  }

  nameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  phoneChange = (event) => {
    this.setState({
      phoneNumber: event.target.value
    });
  };

  addUser = (event) => {
    event.preventDefault(); // Prevent default form submission
    const userData = {
      username: this.state.username,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber
    };

    axios.post('http://localhost:9090/api/public/register', userData)
      .then(res => {
        console.log(res.data);
        // Redirect to login home after successful registration
        window.location.href = '/loginhome';
      })
      .catch(error => {
        console.log(error);
        // Handle error if needed
      });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="registration-container">
          <div className="registration-form">
            <h1>Registration Form</h1>
            <form onSubmit={this.addUser}>
              <div className="form-group">
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.nameChange} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.passwordChange} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" value={this.state.phoneNumber} onChange={this.phoneChange} />
              </div>
              <button type="submit">REGISTER</button>
            </form>
          </div>
        </div>
        <Footer />
  
      </>
    );
  }
}

export default Registration;



