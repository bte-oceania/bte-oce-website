import React from 'react';
import '../css/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <ul className="links">
                    <li><Link to="/"><img src="https://cdn.discordapp.com/attachments/741210134642163713/745520614546341948/unknown.png" className="logo"></img></Link></li>
                    <li><Link to="/"><h2 className="title">Oceania Build Team</h2></Link></li>
                    <li><Link to="/build-zones" className="nav_button">Our Builds</Link></li>
                    <li><Link to="/the-team" className="nav_button">The Team</Link></li>
                    <li><Link to="#" className="nav_button">Apply</Link></li>
                    <li><Link to="#" className="nav_button">FAQ</Link></li>

                    <li><Link to="/"><img id="logo" alt="logo" src="https://cdn.discordapp.com/icons/740864442836713483/a_8cd7460d93bfc2b3692c50868feda192.webp?size=128" /></Link> </li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;