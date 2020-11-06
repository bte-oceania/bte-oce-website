import React from 'react';
import '../css/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../img/logo@2x.png';
import UserProfile from './header/UserProfile';
import UserLoginButton from './header/UserLoginButton';
const { isMenuClosed } = true;
const Header = () => {
    return(
        <header>
            <Link to="/" className="logo">
                <img src={ logo } alt="logo"/>
                <p className="logo-text">Oceania Build Team</p>
            </Link>
            <nav>
                <ul className="header-nav">
                    <li>
                        <Link to="#" className="nav_button">Showcase</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="#" className="nav_button">The Team</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="#" className="nav_button">Apply</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="#" className="nav_button">FAQ</Link>
                    </li>
                    <li>
                        <span className="link-seperate"/>
                    </li>
                    <li>
                        <Link to="#" className="nav_button">Discord</Link>
                    </li>
                </ul>
            </nav>
            <UserHeader/>
            <div className='menu-btn ' onClick={ toggleMenu }>
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
    this.isMenuClosed = !this.isMenuClosed;
}


export default Header;