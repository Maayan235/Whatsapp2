import React from "react";
import "./styles.css";


class GuideMessage extends React.Component {

  render() {
    return (
      <span className={this.props.flag1 ? 'greenState' : 'redState'} > {this.props.guideM} </span>
    );
  }
};

export default GuideMessage;