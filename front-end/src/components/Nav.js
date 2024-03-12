import { Component } from "react";
import './style/navbar.css';
import { Link } from "react-router-dom";


class Nav extends Component {

    render(){
    return (
        <>
     <nav class="custom-navbar">

<div class="container-nav">

    <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
        <ul class="custom-navbar-nav">
        
        
            <Link to="/home" className="link-nav">
              Home
            </Link>
            <Link to="/About" className="link-nav">
             About Us
            </Link>
            <Link to="/addstore" className="link-nav">
              Add Store
            </Link>
            <Link to="/termandcon" className="link-nav">
              Terms and Conditions
            </Link>

            

            <Link to="/contact" className="link-nav">
              Contact Us
            </Link>
            
            <Link to="/login" className="link-nav">
              Login
            </Link>
            <Link to="/register" className="link-nav">
              Register Now
            </Link>

        </ul>

      
    </div>
</div>
    
</nav>
</>
    )
 }

}

export default Nav;