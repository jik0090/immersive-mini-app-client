import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
              <FontAwesomeIcon icon='camera' size='4x' /><br />
              <span>Login</span><br />
              <span>Welcome back</span><br />
              <button><FontAwesomeIcon icon='comment-dots' size='2x' />Login with KakaoTalk</button><br />
              <span>OR</span><br />
              <span>Email address</span><br />
              <input type='text' /><br />
              <span>Password</span><br />
              <input type='text' /><br />
              <Link to='/'>Login</Link><br />
              <span>Don't have an accout?<Link to='/join'>Join</Link></span>
            </div>
        );
    }
}   

export default Login;