import React, { Component, createRef } from 'react';
import { Button, Card } from '@material-ui/core/';
class Intro extends Component {

  constructor(props) {
    super(props);
    this.interactiveButton = createRef();
    this.state = {
      name: 'some Name'
    }
  }

  createPerson() {
    return 'Person';//props: name
  }

  render() {
    const styles = {
      borderRadius: "25px"
    }

    return <div className="Intro">
      <h1>
        Creature Capture!
      </h1>
      <img alt="Title" src="https://picsum.photos/200/?random" style={styles} />
      <button
        onClick={() => this.props.render("map")}
        className="start-button interactive"
        ref={this.interactiveButton}
      >
        Start
        </button>
    </div>;
  }
}

export default Intro;