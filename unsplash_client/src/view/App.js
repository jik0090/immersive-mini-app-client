import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faEllipsisH, faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera, faEllipsisH, faEllipsisV, faSearch)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

