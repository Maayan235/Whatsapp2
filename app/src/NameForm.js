
import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import GuideMessage from "./GuideMessage";
import "./styles.css";
import { userDetails } from "./index";
import img from './eye.jpg'

let flag = false;
var flagList = { "userNameFlag": false, "passwordFlag": false, "nickNameFlag": false };
export { flagList };

function userValidation(user) {

  flag = flagList.userNameFlag = false
  if (user.length < 5)
    return "too short!"
  if (!/^[A-Za-z0-9]*$/.test(user))
    return "pls use numbers \n and english letters only";
  flag = flagList.userNameFlag = true;
  userDetails.userName = user;
  return "good!";
}

function passwordValidation(pass) {
  flag = flagList.passwordFlag = false;
  let x = pass.length;

  if (x == 0) return "";

  if (x < 8) return "too short";

  if ((pass.match(/\d+/g) == null) | !/[A-Z]/.test(pass))
    return "pls add numbers and capital letters";

  if (!/^[A-Za-z0-9]*$/.test(pass))
    return "pls use only numbers and english letters";


  flag = flagList.passwordFlag = true;
  userDetails.password = pass;
  return "strong!";
}
function passwordConfirmation(confirmation) {
  flag = flagList.nickNameFlag = false
  if(confirmation!== userDetails.password){
    return <div>Password <br></br>doesn't match</div>
  }
  flag = flagList.nickNameFlag = true
  return "good!";
}
function nickNameValidation(nick) {
  flag = flagList.nickNameFlag = false
  if (nick.length < 3)
    return "too short!"
  flag = flagList.nickNameFlag = true;
  userDetails.nickName = nick;
  return "good!";
}

class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "" }; //input box value
    this.guideMessage = "";
    this.handleChange = this.handleChange.bind(this);
    this.inputType = this.inputType.bind(this);
    this.mouseOverPass = this.mouseOverPass.bind(this);
    this.mouseOutPass = this.mouseOutPass.bind(this);
    this.showPassword = false;

  }

  mouseOverPass(event) {
    this.setState({ value: this.state.value })
    this.showPassword = true;
  }
  mouseOutPass(event) {

    this.setState({ value: this.state.value })
    this.showPassword = false;
  }

  inputType() {
    if (this.props.formType === "newPassword: " | this.props.formType === "passwordConfirmation: ") {
      return (<input type="password" value={this.state.value} onChange={this.handleChange}></input>
      );
    }
    return (<input type="text" value={this.state.value} onChange={this.handleChange}></input>
    );
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.formType === "New password: ") {
      this.guideMessage = passwordValidation(event.target.value);
    } else if (this.props.formType === "Username: ") {
      this.guideMessage = userValidation(event.target.value);
    } else if (this.props.formType === "Display name: ") {
      this.guideMessage = nickNameValidation(event.target.value)
    } else if (this.props.formType === "Password confirmation: ") {
      this.guideMessage = passwordConfirmation(event.target.value)
    }
  }


  render() {
    let input, see;
    if (this.props.formType === "New password: " | this.props.formType === "Password confirmation: ") {
      input = <input className="form-control" type={this.showPassword ? "text" : "password"} value={this.state.value} onChange={this.handleChange} id="myPassword"></input>
      see = <img src={img} onMouseOver={this.mouseOverPass} onMouseOut={this.mouseOutPass} height='20' width='27'/>
    }
    else {
      input = <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} id="myPassword"></input>
      see = <span>   </span>
    }
    return (
      <>


        <label className="registerLabel">{this.props.formType}</label>

        <div className="container">
          <div class="row">
            <div class="col-7" >
              <>{input}</>
            </div>
            <div class="col-1">
              <>{see}</>
            </div>
            <div class="col-4">
              <GuideMessage guideM={this.guideMessage} flag1={flag} />
            </div>

          </div>



        </div>
      </>
    );
  }
}


export default NameForm;