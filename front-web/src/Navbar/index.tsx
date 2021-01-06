import React from 'react';
import {ReactComponent as Logo} from './Group.svg';
import './styles.css';

const Navbar  = () =>{

    return(
        <nav className="main-navbar">
          <Logo />
            <a href="#" className="logo-text">DSDeliver</a>
        </nav>
    );
}

export default Navbar;