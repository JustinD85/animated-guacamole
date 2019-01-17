import React, { Component } from 'react';


class House extends Component{

  constructor(props) {
    super(props); //Person, Door
  }

  render() {
    return (
      <div className="house">
        <img className="housetable" src={require("../images/woodentable.png")}/>
        <img className="housechairone" src={require("../images/chair.png")}/>
        <img className="housechairtwo" src={require("../images/chair.png")}/>
        <img className="housechairthree" src={require("../images/chair.png")}/>
        <img className="housechairfour" src={require("../images/chair.png")}/>
        <img className="houseplant" src={require("../images/plant.png")}/>
        <button className="housedoor interactive" onClick={() => this.props.render('map')}></button>
      </div>
    );
  }
}


export default House;