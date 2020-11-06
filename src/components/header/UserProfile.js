import React from 'react';
import { Link } from 'react-router-dom';
import userPfp from '../../img/User Profile@2x.png';
const username = "F5_to_Run";

class UserProfile extends React.Component {
    render() {

        return (
            <div className="navbar-user">
                <img className='navbar-user-img' src={ userPfp } alt="profile picture"/>
                <Link to="#" className="username-link">{username}</Link>
                <nav className="user-nav">
                    <ul>
                        <li>
                        <Link to="#" className="nav_button">Profile</Link>
                        </li>  
                        <li>
                        <Link to="#" className="nav_button">Upload</Link>
                        </li>    
                        <li>
                        <Link to="#" className="nav_button">Settings</Link>
                        </li>    
                        <li>
                        <Link to="#" className="nav_button">Sign Out</Link>
                        </li>      
                    </ul>    
                </nav>
            </div>
        );
    }
}

export default UserProfile;