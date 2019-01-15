import React, { Component } from 'react';
import UserInterface from './UserInterface';
import Creature from './Creature';
import creatures from '../data/creature_data'

class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
      creatures: [creatures[0]]
    }
    //Person, Door, Battle
  }

  pickCreature() {

  }

  captureCreature() {

  }

  move() {

  }
  render() {
    let size = 0;
    switch(this.props.playerStatus) {
      case "intro":
        size = "0px"
        break;
      case "map":
        size = "10px"
        break;
      default: 
        size = "40px"
        break;
    }
    return <div style={{zIndex: 10}}>
      <div className="player" style={{
        background: 'red',
        height: size,
        width: size,
        position: "absolute",
        left: this.props.position.x,
        top: this.props.position.y,
      }}></div>
      {this.props.showUI &&
        <UserInterface
          creatures={this.state.creatures}
        />}</div>;
  }
}

export default Person;