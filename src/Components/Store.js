import React, { Component } from 'react';


class Store extends Component{

  constructor(props) {
    super(props); //Person, Door

  }

  buy() {
    
  }

  render() {
  

    return (
      <div>
        <h1>hello im the store</h1>
        <button className="interactive" onClick={() => this.props.render('map')}></button>
      </div>
    );
  }
}

export default Store;