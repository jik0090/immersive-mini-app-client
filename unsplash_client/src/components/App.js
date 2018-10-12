import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './Header/Header';
import Main from './Main/Main';
import Login from './Login/Login';
import Join from './Join/Join';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faEllipsisH, faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'


library.add(faCamera, faEllipsisH, faEllipsisV, faSearch)


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/join' component={Join} />
        </div>
      </Router>
    );
  }
}

export default App;

