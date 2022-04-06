import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import "./styles.css";
import {newUser} from "./NameForm"
import NameForm from "./NameForm"




class Register extends React.Component {
  
  
  register() {
    let user = {
      user: newUser.userName,
      pass: newUser.password,
      nick: newUser.nickName
    }

  }
  
  render(){

  
    

  return (
    <>
      <h1 className="title"> register page </h1>
      <div>
        <NameForm formType={"newUser: "} inputBoxName={"Username: "} />
      </div>
      <div>
        <NameForm formType={"newPassword: "} inputBoxName={"Password: "} />
      </div>
      <div>
        {" "}
        <NameForm formType={"Display Name: "} inputBoxName={"Display name: "} />
      </div>
      <div className="regButton">
        {" "}
        <button onClick={this.register()}>
          {" "}
          register{" "}
        </button>{" "}
      </div>
    </>
  );
}
}
export default Register;