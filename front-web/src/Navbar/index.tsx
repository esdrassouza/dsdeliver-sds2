import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './Group.svg';
import './styles.css';

const Navbar  = () =>{

    return(
        <nav className="main-navbar">
          <Logo />
             <Link to="/" className="logo-text">DSDeliver</Link>
         
        </nav>
    );
}

export default Navbar;