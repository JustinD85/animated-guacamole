import React, { Component } from 'react';

class Intro extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name:'some Name'
    }
  }

  createPerson() {
    return 'Person';//props: name
  }

  render() {
  

    return 'Room(Person, people?)';
  }
}

export default Intro;