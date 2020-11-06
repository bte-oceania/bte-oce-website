import React from 'react';
import '../../css/pages/Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
        return(
            <div className="login">
                <form onSubmit={submitLogin}>
                    <h1>Login</h1>
                    <input placeholder="Username / Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <Link to="/register" className="registerBtn">Register</Link>
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        )
    
}
function submitLogin(props) {

}
export default Login; 