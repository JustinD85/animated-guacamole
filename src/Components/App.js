import React, { Component } from 'react';
import '../Styles/Main.scss';
import Intro from './Intro';
import Room from './Room';
import Map from './Map'

class App extends Component {

  constructor() {
    super();
    this.state = {
      playerStatus: 'intro'
    }
  }

  getPlayerStatus() {
    return {
      'intro': <Intro render={this.renderArea}/>,
      'room': <Room render={this.renderArea}/>,
      'map': <Map render={this.renderArea}/>
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
        {this.getPlayerStatus()}
      </div>
    );
  }
}

export default App;
