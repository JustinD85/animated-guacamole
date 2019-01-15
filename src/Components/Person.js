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


    return <div style={{zIndex: 10}}>
      <div style={{
        background: 'red',
        height: "10px",
        width: "10px",
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