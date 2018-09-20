import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'





class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { imageData: [] };    
    }

    router = () => {

    }

    componentDidMount() {
        axios.get('https://picsum.photos/list')
        .then( res => {
        this.setState( () => {
            for (let i = 0; i < res.data.length; i++) {
                this.state.imageData.push({
                    src: `https://picsum.photos/200/300?image=${res.data[i].id}`,
                    width: res.data[i].width,
                    height: res.data[i].height
                })
            }
        }
          )
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Gallery 
                    photos={this.state.imageData}
                    
                    /> 
                </Router> 
            </div>
        );
    }
}

export default Body;
