import React, { Component } from 'react';
import Person from './Person'


class GamePad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gamePadID: '',
      position: { x: 417, y: 312 },
      currentSelected: '',
      showUI: false
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

  invokeAction = (action) => {
    const oldX = this.state.position.x;
    const oldY = this.state.position.y;
    let newX = 0;
    let newY = 0;
    let showUI = this.state.showUI;
    const gameActions = {
      0: () => this.confirm(),
      1: () => 'cancel',
      3: () => showUI = !showUI,
      9: () => 'start',
      12: () => newY = -10,//'up'
      13: () => newY = 10,//'down'
      14: () => newX = -10,//'left'
      15: () => newX = 10,//'right'
    }
    // console.log(gameActions[action]());
    
    if (gameActions[action]) gameActions[action]();
    console.log(showUI)
    this.setState({
      position: {
        x: newX + oldX,
        y: newY + oldY,
      },
      showUI
    });
  }

  confirm =()=> {
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

  listenKeyboardEvents = () => {
    document.querySelector('body').addEventListener('keydown', (e) => {
      const action = e.key;
      const gameActions = {
        e: '0',
        q: 1,
        f: 3,
        Enter: 9,
        w: 12,//'up'
        s: 13,//'down'
        a: 14,//'left'
        d: 15,//'right'
      }
      gameActions[action] && this.invokeAction(gameActions[action])

    })
  }

  componentWillUnmount() {
    //Stops the constant checking for controller
    clearInterval(this.state.gamePadID);
  }

  componentDidMount() {
    //setup event listeners for keyboard
    this.listenKeyboardEvents();
    // Starts the constant check for controller
    const gamePadID = setInterval(() => {
      this.updateGampad();
    }, 100)//slow time for now, dev-only

    this.setState({ gamePadID });
  }
  render() {
    return <Person showUI={this.state.showUI} position={this.state.position} />
  }
}


export default GamePad;