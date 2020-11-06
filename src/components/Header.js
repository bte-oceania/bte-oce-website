import React from 'react';
import '../css/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../img/logo@2x.png';
import UserProfile from './header/UserProfile';
import UserLoginButton from './header/UserLoginButton';


const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src={ logo }/>
                <p className="logo-text">Oceania Build Team</p>
            </div>
            <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/showcase" className="nav_button">Showcase</Link>
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
                        <Link to="/apply" className="nav_button">Apply</Link>
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
            <UserHeader />
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

export default Header;