import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchBar from './SearchBar';
import Images from './Images';

class Main extends Component {
    render() {
        return (
            <div>
              <Header />
              <SearchBar />
              <Images />
            </div>
        );
    }
}

export default Main;