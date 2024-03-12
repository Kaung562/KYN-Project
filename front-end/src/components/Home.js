import React,{ Component } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import axios from 'axios';
import './style/style.css';
import Nav from './Nav';
import './style/home.css'
import StoreImg from '../assests/image/storeimage2.png'
import Footer from "./Footer";



class Dashboard extends Component{
    constructor(){
        super()
        this.state={
          cars: [],
          selectedTab: 'show',
        };
      }
    
      componentDidMount(){
        axios.get('http://localhost:9090/')
        .then(res=>{
          this.setState({
            cars:res.data
          })
        })
        .catch(error=>{
          console.log(error);
        })
      }

      
      render(){
      
        return(
          <>
          <Nav />
      <div class="hero">
	 <div class="container-home">
		<div class="row">
			<div class="column">
				<div class="intro-excerpt">
					<h1>Step into our store portal and unlock a world of endless possibilities!</h1>
					<p class="mb-4">Welcome to our virtual haven! Embark on a journey through our website where each click unveils treasures waiting to be discovered.
           Start your exploration now and let the adventure begin!</p>
           <Link to="/register" className="btn">
              Join Now
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
				</div>
			</div>
			<div class="colomn-img">
				<div class="hero-img-wrap">
        <img className='project-image' src={StoreImg} alt='project2-image'/>
				</div>
			</div>
		</div>
	</div>
</div>
<Footer />

        </>
        )
      }
}

export default Dashboard;