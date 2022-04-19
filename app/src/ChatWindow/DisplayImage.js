import React, { Component } from "react";

function DisplayImage(props) {
  
    return (
      <div>
        <div>
          <div>
          <div className="bg-light border p-2 bd-highlight"><img src={props.url} height='100'/></div>
          </div>
        </div>
      </div>
    );
  }

export default DisplayImage;