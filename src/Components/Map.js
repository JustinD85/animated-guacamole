import React, { Component } from 'react';

class Map extends Component{

  constructor(props) {
    super(props); //Person, Door
  }


  render() {

    return (
      <div className="map">
        <img className="houseone" src={require ("../images/house.png")}/>
        <button className="houseonebutton interactive deleteMeStyle" onClick={() => this.props.render('house')}></button>
        <img className="store" src={require ("../images/store.png")}/>
        <button className="storebutton interactive deleteMeStyle" onClick={() => this.props.render('store')}></button>
        <img className="clinic" src={require ("../images/clinic.png")}/>
        <button className="clinicbutton interactive deleteMeStyle" onClick={() => this.props.render('clinic')}></button>
        <img className="boss" src={require ("../images/bossbuilding.png")}/>
        <button className="bossbutton interactive deleteMeStyle" onClick={() => this.props.render('boss')}></button>
        <img className="housetwo" src={require ("../images/house.png")}/>
        <button className="housetwobutton interactive deleteMeStyle" onClick={() => this.props.render('house')}></button>
        <img className="treeone" src={require ("../images/tree.png")}/>
        <img className="treetwo" src={require ("../images/tree.png")}/>
        <img className="treethree" src={require ("../images/tree.png")}/>
        <img className="treefour" src={require ("../images/tree.png")}/>
        <img className="treefive" src={require ("../images/appletree.png")}/>
        <img className="treesix" src={require ("../images/appletree.png")}/>
      </div >
    );
  }
}

export default Map;