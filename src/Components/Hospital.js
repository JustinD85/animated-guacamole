import React, { Component } from 'react';


class Hospital extends Component{

  constructor(props) {
    super(props); //Person, Door

  }

  heal() {
    
  }

  render() {
  

    return (
      <div>
        <h1>hello im the clinic</h1>
        <button className="interactive" onClick={() => this.props.render('map')}></button>
      </div>
    );
  }
}

export default Hospital;