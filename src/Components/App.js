import React, { Component } from 'react';
import '../Styles/Main.scss';
import Intro from './Intro';
import Room from './Room';

class App extends Component {

  constructor() {
    super();
    this.state = {
      playerStatus: 'intro'
    }
  }

  getPlayerStatus() {
    return {
      'intro': <Intro />,
      'room': <Room/>
    }[this.state.playerStatus]
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
