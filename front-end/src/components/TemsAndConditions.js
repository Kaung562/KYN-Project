import React from 'react';
import './style/tnc.css' // Import CSS file for styling
import Nav from './Nav'
import Footer from './Footer';

class TermsAndConditions extends React.Component {
  render() {
    return (
        <>
         <Nav />
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p>Welcome to Know Your Neighbourhood!</p>
        <p>These terms and conditions outline the rules and regulations for the use of KYN's Website, located at Website.com.</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.</p>

        <h2>Cookies</h2>
        <p>We employ the use of cookies. By accessing kyn.com, you agreed to use cookies in agreement with the KYN's Privacy Policy.</p>
        <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

        <h2>License</h2>
        <p>Unless otherwise stated, KYN and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <ul>
          <li>Republish material from Website Name</li>
          <li>Sell, rent or sub-license material from Website Name</li>
          <li>Reproduce, duplicate or copy material from Website Name</li>
          <li>Redistribute content from Website Name</li>
        </ul>
      </div>
      <Footer />
      </>
    );
  }
}

export default TermsAndConditions;
