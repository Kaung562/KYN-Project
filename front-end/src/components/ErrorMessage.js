import React from 'react';
import './style/error.css'
import { Link } from 'react-router-dom';
import Nav from './Nav'

const ErrorMessagePage = ({ error }) => {
  return (
    <>
    <Nav />
    <div class="error-container">
    <div class="error-code">Error</div>
    <div class="error-message">Invalid Username or Password</div>
    <Link to="/login" className="back-button">
              Go Back
            </Link>
</div>
</>
  );
};

export default ErrorMessagePage;
