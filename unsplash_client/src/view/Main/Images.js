import React, { Component } from 'react';

class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clouds:[]
        }
    }

    componentDidMount() {
        const url = 'https://picsum.photos/list';
        fetch(url).then( res => res.json() )
                  .then( d => {
                      console.log(d);
                      this.setState({clouds: d})
                  })

    }
    render() {
        return (
            <div>
              {this.state.clouds.map( (el) => {
                  return <img src={`https://picsum.photos/200/300?image=${el.id}`} alt={'nono'} height={el.height} width={el.width} key={el.id} />
              })} 
            </div>
        );
    }
}

export default Images;