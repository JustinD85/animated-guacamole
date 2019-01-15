import React, { Component } from 'react';
import { blue } from '@material-ui/core/colors';


class UserInterface extends Component {

  constructor(props) {
    super(props); //Person, Door

  }

  componentDidMount() {

  }
  render() {

    return <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '10%',
      background: 'blue'
    }}>
      <ul>
        {this.props.creatures.map(creature => {
          return (<div>
            <div>{creature.name}</div>
            <div>Type:{creature.type}</div>
            <div>health:{creature.health}</div>
          </div>)
        })}
      </ul>
    </div>;
  }
}

export default UserInterface;