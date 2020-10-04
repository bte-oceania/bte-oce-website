import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <ul className="links">
                    <li><Link to="/"><h2 id="title">Oceania Build Team</h2></Link></li>
                    <li><Link to="/build-zones" id="nav_button">Our Builds</Link></li>
                    <li><Link to="/the-team" id="nav_button">The Team</Link></li>
                    <li><Link to="/"><img id="logo" alt="logo" src={require('../img/oce_logo.png')} /></Link> </li>
            </ul>
        </div>
    );
}

export default Header;