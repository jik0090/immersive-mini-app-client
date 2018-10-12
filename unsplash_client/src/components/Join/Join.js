import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


class Join extends Component {
    render() {
        return (
            <div>
              <h1>Join Unsplash</h1><br />
              <span>Already have an account?</span>
              <Link to='/login'>Login</Link><br />
              <button><FontAwesomeIcon icon='comment-dots' size='2x' />Join using KakaoTalk</button><br />
              <span>OR</span><br />
              Fist name : <input type='text' /> Last name : <input type='text' /><br />
              Email address : <input type='text' /><br />
              Username(only letters, numbers, and underscores) : <input type='text' /><br />
              Password(min 6 char) : <input type='text' /><br />
              <Link to='/'><button>Join</button></Link>
            </div>
        );
    }
}

export default Join;  