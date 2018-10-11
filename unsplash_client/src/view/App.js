import React, { Component } from 'react';
import Header from './Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faEllipsisH, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera, faEllipsisH, faEllipsisV)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;

