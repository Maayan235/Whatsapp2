import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import "./styles.css";


class guideMessage extends React.Component{
  
  constructor(props) {
    super(props);
    this.flag = true
  }  
    render(){
    return(
      <span className="redState" value={this.props.inputStatee}> {this.props.inputStatee} </span>
    );
  }
};

export default guideMessage;