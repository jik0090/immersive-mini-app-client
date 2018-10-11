import React, { Component } from 'react';
import Header from './Header/Header';
import SearchBar from './Main/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faEllipsisH, faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera, faEllipsisH, faEllipsisV, faSearch)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;

