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
                    <li><Link to="/showcase" className="nav_button">Showcase</Link></li>
                    <li><Link to="/the-team" className="nav_button">The Team</Link></li>
                    <li><Link to="/apply" className="nav_button">Apply</Link></li>
                    <li><Link to="/faq" className="nav_button">FAQ</Link></li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;