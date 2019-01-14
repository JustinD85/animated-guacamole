import React, { Component } from 'react';
import '../styles/Main.scss';
import Intro from './Intro';
import Room from './Room';
import Map from './Map';
import Clinic from './Hospital';
import Store from './Store';
import Boss from './Gym'
import GamePad from './GamePad';
import House from './House'

class App extends Component {

  constructor() {
    super();
    this.state = {
      playerStatus: 'intro',
    }
  }

  getPlayerStatus() {
    return {
      'intro': <Intro select={this.state.currentSelected} render={this.renderArea} />,
      'room': <Room render={this.renderArea} />,
      'map': <Map render={this.renderArea} />,
      'clinic': <Clinic render={this.renderArea} />,
      'boss': <Boss render={this.renderArea} />,
      'store': <Store render={this.renderArea} />,
      'house': <House render={this.renderArea} />
    }[this.state.playerStatus]
  }

  renderArea = (string) => {
    this.setState({
      playerStatus: string
    })
  }



  render() {

    return (
      <div className="App">
        <GamePad/>
        {this.getPlayerStatus()}
      </div>
    );
  }
}

export default App;
