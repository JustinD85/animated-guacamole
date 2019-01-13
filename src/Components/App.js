import React, { Component } from 'react';
import '../styles/Main.scss';
import Intro from './Intro';
import Room from './Room';
import Map from './Map'

class App extends Component {

  constructor() {
    super();
    this.state = {
      playerStatus: 'intro',
      gamePadID: '',
      actions: {
        confirm: 0,
        cancel: 1,
        info: 3,
        start: 9
      }
    }
  }

  getPlayerStatus() {
    return {
      'intro': <Intro render={this.renderArea} />,
      'room': <Room render={this.renderArea} />,
      'map': <Map render={this.renderArea} />
    }[this.state.playerStatus]
  }

  renderArea = (string) => {
    this.setState({
      playerStatus: string
    })
  }
//Where the magic happens with the controller
  updateGampad = () => {
    const gamePad = navigator.getGamepads()[0] || 'No GamePad Connected';
    const gpButtons = gamePad.buttons;
    const gpAxes = gamePad.axes;
    const { actions } = this.state

    console.table(gpButtons);
  }

  componentWillUnmount() {
    //Stops the constant checking for controller
    clearInterval(this.state.gamePadID);
  }

  componentDidMount() {
    //Starts the constant check for controller
    const gamePadID = setInterval(() => {
      this.updateGampad();
    }, 500)//slow time for now, dev-only
    this.setState({ gamePadID });
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
