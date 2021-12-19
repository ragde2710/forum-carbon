import React from "react";
import {Search} from '../search/search';
import './navbar.css';
import menu from './menu.png'
import help from './help.svg'
import logo from './logo.png'

export const NavBar = () => ( 
<nav className = "navbar" >
    <div className="navbar-menu">
        <img src={logo} alt="menu"/>
    </div>
    <div className="logo">
        <div className="logo-title">
                <h2>IBM</h2>
        </div>
        <div className="logo-subtitle"> 
            <a href="/"><h2>[System Forum]</h2></a>
        </div>
    </div>
    <div className="navbar-ask">
            <img src={help} alt="help"/>
    </div>
    
</nav>
)



  {/*  <div className="navbar-search">
        <Search 
            placeholder = 'Search...'
            handleChange = {e => this.setState({searchTitle: e.target.value})}/>
    </div> */}