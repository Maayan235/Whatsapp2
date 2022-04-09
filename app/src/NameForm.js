
import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import GuideMessage from "./GuideMessage";
import "./styles.css";
import { newUser } from "./Register";


var flag = false;


function userValidation(user) {
  flag = false  
  if(user.length < 5) 
    return "too short!"
  if (!/^[A-Za-z0-9]*$/.test(user))
    return "pls use numbers and english letters only";
  flag= true;
  newUser.userName = user;
  return "good!";
}

function passwordValidation(pass) {
  flag = false;
  let x = pass.length;
  
  if (x == 0) return "";
  
  if (x < 8) return "too short";
  
  if ((pass.match(/\d+/g) == null) | !/[A-Z]/.test(pass))
    return "pls add numbers and capital letters";
  
  if (!/^[A-Za-z0-9]*$/.test(pass))
    return "pls use only numbers and english letters";
    
    flag = true;
    newUser.password = pass;
    return "strong!";
}

function nickNameValidation(nick) {
    flag = false  
    if(nick.length < 3) 
      return "too short!"
    flag= true;
    newUser.nickName =nick;
    return "good!";
  }

class NameForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = { value: "" }; //input box value
    this.guideMessage = "";
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.formType === "newPassword: ") {
      this.guideMessage = passwordValidation(event.target.value);
    }else
    if (this.props.formType === "newUser: ") {
      this.guideMessage = userValidation(event.target.value);
    }else{
        this.guideMessage = nickNameValidation(event.target.value)
    }
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formDiv">
          <span className="inputBoxName"> {this.props.inputBoxName}</span>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <GuideMessage guideM= {this.guideMessage} flag1={flag}/>
        
        </div>
      </form>
    );
  }
}


export default NameForm;