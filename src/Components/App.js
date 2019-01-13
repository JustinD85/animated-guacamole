import React, { Component } from 'react';
import '../styles/Main.scss';
import Intro from './Intro';
import Room from './Room';
import Map from './Map';
import GamePad from './GamePad';

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
      'map': <Map render={this.renderArea} />
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
