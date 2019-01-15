import React, { Component } from 'react';


class Hospital extends Component{

  constructor(props) {
    super(props); //Person, Door

  }

  heal() {
    //map thru the players pokemon and reassign pokemon health to 100
  }

  render() {
  
    return (
      <div className="clinic">
        <img className="clinicdesk" src={require("../images/clinicdesk.png")}/>
        <img className="clinicplantone" src={require("../images/plant.png")}/>
        <img className="clinicplanttwo" src={require("../images/plant.png")}/>
        <img className="clinictableone" src={require("../images/glasstable.png")}/>
        <img className="clinictabletwo" src={require("../images/glasstable.png")}/>
        <img className="clinicchairone" src={require("../images/chair.png")}/>
        <img className="clinicchairtwo" src={require("../images/chair.png")}/>
        <img className="clinicchairthree" src={require("../images/chair.png")}/>
        <img className="clinicchairfour" src={require("../images/chair.png")}/>
        <img className="clinicchairfive" src={require("../images/chair.png")}/>
        <img className="clinicchairsix" src={require("../images/chair.png")}/>
        <button className="clinicdoor interactive" onClick={() => this.props.render('map')}></button>
        <button className="clinicperson interactive" onClick={() => alert('this button alerts the function heal')}></button>
      </div>
    );
  }
}

export default Hospital;