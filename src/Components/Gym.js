import React, { Component } from 'react';


class Gym extends Component{

  constructor(props) {
    super(props); //Person, Door, Battle

  }

  render() {
  

    return (
      <div>
        <h1>hello im the gym</h1>
        <button className="interactive" onClick={() => this.props.render('map')}></button>
      </div>
    );
  }
}

export default Gym;