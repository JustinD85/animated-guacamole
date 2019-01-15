import React, { Component } from 'react';


class House extends Component{

  constructor(props) {
    super(props); //Person, Door
  }

  render() {
    return (
      <div className="house">
        <h1>hello im house</h1>
        <button className="interactive" onClick={() => this.props.render('map')}></button>
      </div>
    );
  }
}


export default House;