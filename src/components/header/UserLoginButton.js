import React from 'react';
import { Link } from 'react-router-dom';

class UserLoginButton extends React.Component {
    render()
    {
        return (
            <div>
                <Link to="Login" className="navbar-user">
                    Login / Register
                </Link>
            </div>
         );
    }
}

export default UserLoginButton;