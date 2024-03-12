import React, { Component } from 'react';
import './style/register.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav'
import Footer from './Footer';

class AddStore extends Component{
    //attibutes & methods 
    constructor(){
        super();
        this.state={
            "id":'',
            "storeName":'',
            "storeNumber" : '',
             "location":''
        }
    }
  
  idChange=(event)=>{
   //alert(event.target.value);
    this.setState({
        id:event.target.value
    })
  }
  
  nameChange=(event)=>{
    this.setState({
        storeName:event.target.value
    })
  }
  storeNumberChange=(event)=>{
    this.setState({
        storeNumber:event.target.value
    })
  }

  locationChange=(event)=>{
    this.setState({
        location:event.target.value
    })
  }
  
  
  addProduct=(event)=>{
    //alert(this.state.prodId+" "+this.state.prodName+" "+this.state.prodPrice+" "+this.state.prodCategory);
    axios.post('http://localhost:9090/addStore',this.state 
    )
    .then(res=>{
        console.log(res.data);
    })
    .catch(error=>{
        console.log(error);
    })
  }
    //View --HTML
  
    render(){
        return (
          <>
          <Nav />
          <div className="registration-container">
          <div className="registration-form">
              <h1>Store Information</h1>
              <form onSubmit={this.addProduct}> 
                  <div className="form-group">
                      <label>ID</label>
                      <input type="text" value={this.state.id} onChange={this.idChange} />
                  </div>
                  <div className="form-group">
                      <label>Shop Name</label>
                      <input type="text" value={this.state.storeName} onChange={this.nameChange} />
                  </div>
                  <div className="form-group">
                      <label>Shop Number</label>
                      <input type="text" value={this.state.storeNumber} onChange={this.storeNumberChange} />
                  </div>
                  <div className="form-group">
                      <label>Location</label>
                      <input type="text" value={this.state.location} onChange={this.locationChange} />
                  </div>
                  <button type="submit">ADD NOW</button>
              </form>
          </div>
      </div>
      <Footer />
      </>
        )
    }
  }
  
  export default AddStore;