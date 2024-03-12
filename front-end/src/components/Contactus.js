import React from 'react';
import './style/contactus.css'; // Import CSS file for styling
import GoogleMap from '../assests/image/GoogleMapTA.jpg'
import Nav from './Nav';
import Footer from './Footer';

class ContactUs extends React.Component {
  render() {
    return (
        <>
        <Nav />
        <div className="contact-container">
             <div className="location-map">
            <h2>Location</h2>
            <img src={GoogleMap} alt="Location Map" />
          </div>

        <div className="contact-content">
    
          <div className="info">
            <h2>Contact Information:</h2>
            <p>Email: kyn@gmail.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Social Media: <a href="https://www.facebook.com/example">Facebook</a>, <a href="https://twitter.com/example">Twitter</a>, <a href="https://www.instagram.com/example/">Instagram</a></p>
          </div>  
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default ContactUs;
