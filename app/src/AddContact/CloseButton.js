
import React from "react";
 
const CloseButton = props => {
  return (
    <div className="popup-box">
      <div className="box">
        {props.content}
      </div>
    </div>
  );
};
 
export default CloseButton;