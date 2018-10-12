import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
              <Link to='/'>
                <FontAwesomeIcon icon='camera' size='2x' />
                <span>Unsplash Photos for everyone </span>
              </Link>                
                <button>Collection</button>
                <button>Explore</button>
                <FontAwesomeIcon icon='ellipsis-h' size='2x' />
                <button>Submit a photo</button>
                <FontAwesomeIcon icon='ellipsis-v' size='2x' />
              <Link to='/login'>
                <button>Login</button>
              </Link>
              <Link to='/join'>
                <button>Join free</button>
              </Link>         
            </div>
        );
    }
}

export default Header;