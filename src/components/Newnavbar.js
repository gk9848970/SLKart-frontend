import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import Logo from '../images/logo.svg';
import homeicon from '../images/home-trend-up.svg';
import carticon from '../images/Cart.svg';
import profileicon from '../images/Profile.svg';
import callicon from '../images/call-calling.svg';
import locaticon from '../images/location.svg';
import '../css/Home.css';
import { Link, useHistory } from "react-router-dom";
import CourseCard from '../components/CourseCard';
import LoadingScreen from "react-loading-screen";
import search from '../images/search.svg';

function Newnavbar() {
    
    return(<div className='containermanual'>
       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <a className="navbar-brand"> <img src={Logo} alt="Company Logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/homes"><a className="nav-link active  me-4 d-flex   textStyle" aria-current="page" href="#"><img src={homeicon} className='me-2'/> Home</a></Link>
        </li>
        <li className="nav-item textStyle">
        <Link to="/myprofile">  <a className="nav-link active me-4 d-flex" href="#"><img src={profileicon} className='me-2'/>Profile</a></Link>
        </li>
        <li className="nav-item textStyle">
        <Link to="/mycart"> <a className="nav-link active me-4 d-flex" href="#"><img src={carticon} className='me-2'/>Cart</a></Link>
        </li>
        <li className="nav-item borders textStyle">
          <a className="nav-link active me-4 d-flex" href="#"><img src={callicon} className='me-2'/>{localStorage.getItem('contact1')}</a>
        </li>
        <li className="nav-item textStyle">
          <a className="nav-link active d-flex" href="#"><img src={locaticon} className='me-2'/>Nrk bizpark</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

   
   

    </div>); 
}

export default Newnavbar;