import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <ul className="links">
                    <li><Link to="/"><h2 id="title">Build the Earth | Oceania</h2></Link></li>
                    <li><Link to="/build-zones" id="nav_button">Our Builds</Link></li>
                    <li><Link to="/the-team" id="nav_button">The Team</Link></li>
                    <li><Link to="/"><img id="logo" alt="logo" src="https://cdn.discordapp.com/icons/740864442836713483/52e9b39698b23c05bc352d9ccf892948.webp?size=128" /></Link> </li>
            </ul>
        </div>
    );
}

export default Header;