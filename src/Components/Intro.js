import React, { Component } from 'react';
import { Button, Card } from '@material-ui/core/';
class Intro extends Component {

  constructor(props) {
    super(props);
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
      <Button onClick={()=> this.props.render("map")} variant="contained" color="primary">Start</Button>
    </div>;
  }
}

export default Intro;