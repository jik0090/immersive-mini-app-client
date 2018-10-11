import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Images from './Images';

class Main extends Component {
    render() {
        return (
            <div>
              <SearchBar />
              <Images />
            </div>
        );
    }
}

export default Main;