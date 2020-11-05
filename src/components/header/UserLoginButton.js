import React from 'react';
import { Link } from 'react-router-dom';

class UserLoginButton extends React.Component {
    render()
    {
        return (
            <div className="navbar-user">
                <Link to="#">Login / Register</Link>
            </div>);
    }
}

export default UserLoginButton;