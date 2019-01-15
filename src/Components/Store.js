import React, { Component } from 'react';


class Store extends Component{

  constructor(props) {
    super(props); //Person, Door

  }

  buy() {
    
  }

  render() {
  

    return (
      <div className="store">
        <img className="storedesk" src={require("../images/storedesk.png")} />
        <img className="storefoodone" src={require("../images/foodone.png")} />
        <img className="storefoodtwo" src={require("../images/foodone.png")} />
        <img className="storefoodthree" src={require("../images/foodtwo.png")} />
        <img className="storefoodfour" src={require("../images/foodtwo.png")} />
        <img className="storefridgeone" src={require("../images/fridge.png")} />
        <img className="storefridgetwo" src={require("../images/fridge.png")} />
        <button className="storeperson interactive" onClick={() => alert("what do you want to buy")}></button>
        <button className="storedoor interactive" onClick={() => this.props.render('map')}></button>
      </div>
    );
  }
}

export default Store;