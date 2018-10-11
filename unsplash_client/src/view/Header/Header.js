import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends Component {
    render() {
        return (
            <div>
              <FontAwesomeIcon icon='camera' size='2x' />
              <span>Unsplash Photos for everyone </span>
              <button>Collection</button>
              <button>Explore</button>
              <FontAwesomeIcon icon='ellipsis-h' size='2x' />
              <button>Submit a photo</button>
              <FontAwesomeIcon icon='ellipsis-v' size='2x' />
              <button>Login</button>
              <button>Join free</button>
            </div>
        );
    }
}

export default Header;