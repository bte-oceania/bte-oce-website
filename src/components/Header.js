import React from 'react';
import '../css/Header.scss';
import { Link, useLocation  } from 'react-router-dom';
import logo from '../img/logo@2x.png';
import UserProfile from './header/UserProfile';
import UserLoginButton from './header/UserLoginButton';

let isMenuClosed = true;


const Header = () => {
    const isLanding = useLocation().pathname === "/";
    return(
        
        <header className={isLanding ? "landing" : ""}>
            <Link to="/" className="logo">
                <img src={ logo } alt="logo"/>
                <p className="logo-text">Oceania Build Team</p>
            </Link>
            <nav>
                <ul className="header-nav">

                    <li>
                        <Link to="/showcase" className="nav_button">Showcase</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="/team" className="nav_button">The Team</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="/map" className="nav_button">Map</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="/apply" className="nav_button">Apply</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="/FAQ" className="nav_button">FAQ</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="#" className="nav_button">Discord</Link>
                    </li>
                </ul>
            </nav>

            <UserHeader />
            <div className={isMenuClosed ? 'menu-btn':'menu-btn mobile-open'} onClick={ toggleMenu }>
                <div className="menu-btn_burger"></div>
            </div>

        </header>
    );
}

function UserHeader(props) {
    if(props.userLoggedIn)
    {
        return <UserProfile />;
    }
    else {
        return <UserLoginButton />;
    }
}

function toggleMenu(props) {
    isMenuClosed = !isMenuClosed;
    return;
}


export default Header;