
import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import GuideMessage from "./GuideMessage";
import "./styles.css";


var newUser = {userName:'', password:'', nickName:''}
export{newUser};
var passFlag = false;










function userValidation(user) {

  if (!/^[A-Za-z0-9]*$/.test(user))
    return "pls use numbers and english letters only";
  newUser.userName = user;
  return "good!";
}

function passwordValidation(pass) {
  passFlag = false;
  let x = pass.length;
  
  if (x == 0) return "";
  
  if (x < 10) return "too short";
  
  if ((pass.match(/\d+/g) == null) | !/[A-Z]/.test(pass))
    return "pls add numbers and capital letters";
  
  if (!/^[A-Za-z0-9]*$/.test(pass))
    return "pls use only numbers and english letters";
    
    passFlag = true;
    newUser.password = pass;
    return "strong!";
}


class NameForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = { value: "" }; //input box value
    this.inputState = "";
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.formType === "newPassword: ") {
      this.inputState = passwordValidation(event.target.value);
    }
    if (this.props.formType === "newUser: ") {
      this.inputState = userValidation(event.target.value);
    }
  }
  //handleSubmit(event) {
  //  alert("A name was submitted: " + this.state.value);
  //  event.preventDefault();
  //}

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formDiv">
          <span className="inputBoxName"> {this.props.inputBoxName}</span>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <GuideMessage inputStatee = {this.inputState} flag1={passFlag}/>
        </div>
      </form>
    );
  }
}


export default NameForm;