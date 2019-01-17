import React, { Component } from 'react';


class Gym extends Component{

  constructor(props) {
    super(props); //Person, Door, Battle

  }

  render() {
  

    return (
      <div  className="boss">
        <img className="bosschair" src={require("../images/bosschair.png")}/>
        <button className="bossdoor interactive" onClick={() => this.props.render('map')}></button>
      </div>
    );
  }
}

export default Gym;