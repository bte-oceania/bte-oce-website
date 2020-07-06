import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <h2 id="title">Build the Earth | NSW and ACT</h2>
            <ul className="links">
                    <li><Link to="/" id="nav_button" >Home</Link></li>
                    <li><Link to="/build-zones" id="nav_button">Current Active Build Zones</Link></li>
            </ul>
            <img id="logo" alt="" src="https://cdn.discordapp.com/icons/698134083674570763/a21dced43e0d31eb59d98e25d7030b3a.webp?size=128" />
        </div>
    );
}

export default Header;