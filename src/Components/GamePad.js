import React, { Component } from 'react';



class GamePad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gamePadID: '',
      position: { x: 417, y: 312 },
      currentSelected: ''
    }

  }

  //Where the magic happens with the controller
  updateGampad = () => {
    const gamePad = navigator.getGamepads()[0];
    if (!gamePad) return 'No GamePad Connected'
    const gpButtons =
      gamePad.buttons
        .map((b, i) => b.pressed && i)
        .filter(b => b !== false);
    const gpAxes = gamePad.axes;


    gpButtons.forEach((b) => {
      this.invokeAction(b);
    });
  }
  invokeAction(action) {
    const oldX = this.state.position.x;
    const oldY = this.state.position.y;
    let newX = 0;
    let newY = 0;
    const gameActions = {
      0: () => this.confirm(),
      1: () => 'cancel',
      3: () => 'info',
      9: () => 'start',
      12: () => newY = -15,//'up',
      13: () => newY = 15,//'down',
      14: () => newX = -15,//'left',
      15: () => newX = 15,//'right'
    }

    if (gameActions[action]) gameActions[action]();

    this.setState({
      position: {
        x: newX + oldX,
        y: newY + oldY
      }
    });
  }

  confirm() {
    document.querySelectorAll('.interactive')
      .forEach(thing => {
        const bounds = thing.getBoundingClientRect();
        const { position } = this.state;
        if (position.x > bounds.x && position.x < bounds.x + bounds.width) {
          if (position.y > bounds.y && position.y < bounds.y + bounds.height) {
            thing.click();
          }
        }
      })
  }

  componentWillUnmount() {
    //Stops the constant checking for controller
    clearInterval(this.state.gamePadID);
  }

  componentDidMount() {
    // Starts the constant check for controller
    const gamePadID = setInterval(() => {
      this.updateGampad();
    }, 100)//slow time for now, dev-only

    this.setState({ gamePadID });
  }
  render() {
    return <div style={{
      background: 'red',
      height: "10px",
      width: "10px",
      position: "absolute",
      left: this.state.position.x,
      top: this.state.position.y,
      zIndex: 10
    }}>

    </div>
  }
}


export default GamePad;