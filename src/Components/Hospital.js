import React, { Component } from 'react';


class Hospital extends Component{

  constructor(props) {
    super(props); //Person, Door

  }

  heal() {
    //map thru the players pokemon and reassign pokemon health to 100
  }

  render() {
  

    return (
      <div className="clinic">
        <h1>hello im the clinic</h1>
        <button className="interactive" onClick={() => this.props.render('map')}></button>
        <button className="interactive" onClick={() => alert('this button alerts the function heal')}></button>
      </div>
    );
  }
}

export default Hospital;