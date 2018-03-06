import React from "react";

import Home from './Home';
import About from './About';
import MyBrands from './MyBrands';
import SignIn from './SignIn';
import Contact from './Contact';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


const navBar = () => {
    return (
       
        <div className="mainHeader clearfix">
            <nav className="nav-left">
                <ul>
                    <li>   
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                        
                    </li>
                </ul>
            </nav>
            <nav className="nav-right">
                <ul>
                    <li>
                        <Link to="/mybrands">My Brands</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link> 
                    </li>
                    <li>
                        <Link to="/signout">Sign Out</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>  
         
        </div>
    )
}

export default navBar;
    
    
// if sign in