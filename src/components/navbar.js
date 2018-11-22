import React from 'react';

import logo from '../assets/images/micron-logo.png';

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={logo}></img>
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </div>
                    <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active" href="/">
                        Home
                        </a>
                        <a className="navbar-item" href="#microns">
                        Microns
                        </a>
                        <a className="navbar-item" href="#examples">
                        Examples
                        </a>
                        <a className="navbar-item" href="#technology">
                        Technology
                        </a>       
                        <a className="navbar-item" href="#about">
                        About
                        </a>                                            
                        <a className="navbar-item" href="#contact">
                        Contact
                        </a>
                    </div>
                    </div>
                </div>
            </nav>            
        )
    }
}

export default Navbar;