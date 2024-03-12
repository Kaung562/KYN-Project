// Home.js
import React from 'react';
import './style/about.css';
import { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer';
//import './Home.css'; // Add your own styles
//import './css/Home.css';
class About extends Component {
  render(){
  return (

    <>
    <Nav />
    <div className='about-body'>
    <div class="container-about">
    <h1 className='about-h1'>About Us</h1>
    <p className='about-p1'> We take pride in our commitment to creating innovative solutions that enhance the user 
    experience and streamline processes. Our latest project, Know-Your-Neighbourhood (KYN), exemplifies this dedication 
    by offering a comprehensive platform designed to connect users with their local community seamlessly.
    One of the key features of KYN is its ability to provide 
    users with access to surrounding stores directly from the dashboard. T
    hrough a simple and intuitive interface, users can explore nearby establishments, 
    facilitating greater community engagement and convenience.Our team is dedicated to 
    ensuring the seamless operation of the platform, with thorough testing procedures in 
    place to guarantee that all functions meet the exacting standards of our clients. From 
    design conception to API implementation, we strive for excellence in every aspect of the project.
    </p>
    </div>
    </div>
    <Footer />
    </>
  
  
  );
};
}

export default About;