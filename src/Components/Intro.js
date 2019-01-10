import React, { Components } from 'react';

class Intro extends Components{

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