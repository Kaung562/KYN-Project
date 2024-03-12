
import React,{Component, useState, useEffect } from 'react';
import './App.css';

import LoginForm from './components/LoginForm';

import {BrowserRouter as Router,Routes,Route,Link, Navigate, useNavigate} from "react-router-dom"
import axios from 'axios';
import './index.css'
import FacebookLoginComponent from './components/FacebookLoginComponent';
import Home from './components/Home';
import Nav from './components/Nav';
import Register from './components/Registration'
import ErrorMessagePage from './components/ErrorMessage';
import LoginHome from './components/LoginHome';
import LoginNav from './components/LoginNav';
import About from './components/About';
import TermsAndConditions from './components/TemsAndConditions';
import ContactUs from './components/Contactus';
import Footer from './components/Footer';
import AddStore from './components/AddStore';



  const App = () => {
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState('');




    useEffect(() => {
      // Fetch data when the component mounts
      axios.get('http://localhost:9090/login/facebook/callback')
        .then(res => {
          // Assuming the response data contains the username
          const { username } = res.data;
          setUserName(username);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   axios.get('http://localhost:9090/login/facebook/callback')
  //     .then(res => {
  //       setCars(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  
  const handleLogin = (userData) => {
     setUser(userData);
 
    };
    return(
    
      <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/loginhome" replace /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/login/facebook" element={user ? <Navigate to="/loginhome" replace /> : <FacebookLoginComponent onLogin={handleLogin} />} />
        {/* <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} /> */}
        <Route path="/loginhome" element={<LoginHome />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/loginhome" element={<LoginHome />}></Route>
       
        <Route path='/nav' element={<Nav />}> </Route>
        <Route path='/loginnav' element={<LoginNav />}> </Route>
        <Route path='/register' element={<Register />}> </Route>
        <Route path='/error' element={<ErrorMessagePage />}></Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/termandcon' element={<TermsAndConditions />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/footer' element={<Footer />}> </Route>
        <Route path='/addstore' element={<AddStore />}> </Route>
        
      </Routes>
    </Router>
     
    )
  };

export default App;




  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   axios.get('http://localhost:9090/showData')
  //     .then(res => {
  //       setProducts(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);