import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          initialState: "Search for movies, shows, actors, etc...",
          currentText: " "
        }
      }
    
      changeText(currentText) {
        this.setState({currentText});
        //console.log({currentText});
      }
    
      render() {
        return (
            <div>
              <div>
                <img src={'https://images.unsplash.com/photo-1497676370847-f4f4033fc854?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1418b2ecb862f3dc478154b4de6eebd&auto=format&fit=crop&w=2709&q=80'} alt={"Theater"} height="550px" width="100%" />
              </div>

              <div>
                <form>
                  <button onClick={this.changeText.bind(this, 'currentText')}><FontAwesomeIcon icon='search' size='2x' /></button>
                  <input type="text" placeholder={this.state.initialState} onChange={this.changeText.bind(this, 'currentText')} />
                </form>
              </div>
            </div>
        );
    
      }
    
}



export default SearchBar;