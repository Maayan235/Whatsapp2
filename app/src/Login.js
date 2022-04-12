import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import "./styles.css";
import NameForm from "./NameForm"



export class Login extends React.Component {
    
    login() {

    }
    
    render(){
    return (
      <>
        <h1 className="title"> register page </h1>
        <div>
          <NameForm formType={"Username: "} inputBoxName={"Username: "} />
        </div>
        <div>
          <NameForm formType={"Password: "} inputBoxName={"Password: "} />
        </div>
        <div className="loginButton">
          {" "}
          <button onClick={this.login()}>
            {" "}
            Log in{" "}
          </button>{" "}
        </div>
      </>
    );
  }
}
