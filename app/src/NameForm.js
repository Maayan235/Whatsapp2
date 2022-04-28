
import React from "react";
import GuideMessage from "./GuideMessage";
import "./styles.css";
import { userDetails } from "./index";
import img from './eye.jpg'
import ContactsData from "./Contacts/ContactsData";
import { flagList } from "./Components/Register"


function setFlag(formType) {
  if (formType === "New password: ") {
    return flagList.password;
  } else if (formType === "Username: ") {
    return flagList.userName;
  } else if (formType === "Display Name: ") {
    return flagList.nickName;
  } else if (formType === "Password confirmation: ") {
    return flagList.cnfPassword;
  }
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
    this.passwordConfirmation = this.passwordConfirmation.bind(this);
    this.userValidation = this.userValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.nickNameValidation = this.nickNameValidation.bind(this);
    this.flag = setFlag(this.props.formType);
    this.showPassword = false;

  }

  userValidation(user) {

    this.flag = flagList.userName = false;

    if (user.length < 5)
      return "too short!"
    if (!/^[A-Za-z0-9]*$/.test(user))
      return "pls use numbers \n and english letters only";
    if (ContactsData.find((userInput) => userInput.name === user) != null)
      return "Username already exist!"
    this.flag = flagList.userName = true;
    userDetails.userName = user;
    return "good!";
  }

  passwordValidation(pass) {
    this.flag = flagList.password = false;
    let x = pass.length;

    if (x === 0) return "";

    if (x < 8) return "too short";

    if ((pass.match(/\d+/g) == null) | !/[A-Z]/.test(pass))
      return "pls add numbers and capital letters";

    if (!/^[A-Za-z0-9]*$/.test(pass))
      return "pls use only numbers and english letters";

    this.flag = flagList.password = true;
    userDetails.password = pass;
    return "strong!";
  }
  passwordConfirmation(confirmation) {
    this.flag = flagList.cnfPassword = false;
    if (confirmation !== userDetails.password) {
      return <div>Password <br></br>doesn't match</div>
    }
    this.flag = flagList.cnfPassword = true
    return "good!";
  }
  nickNameValidation(nick) {
    this.flag = flagList.nickName = false;
    if (nick.length < 3)
      return "too short!"
    this.flag = flagList.nickName = true;
    userDetails.nickName = nick;
    return "good!";
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
      this.guideMessage = this.passwordValidation(event.target.value);
      this.flag = flagList.password;
    } else if (this.props.formType === "Username: ") {
      this.guideMessage = this.userValidation(event.target.value);
      this.flag = flagList.userName;
    } else if (this.props.formType === "Display Name: ") {
      this.guideMessage = this.nickNameValidation(event.target.value)
      this.flag = flagList.nickName;
    } else if (this.props.formType === "Password confirmation: ") {
      this.guideMessage = this.passwordConfirmation(event.target.value)
      this.flag = flagList.cnfPassword;
    }
  }


  render() {
    let input, see;
    if (this.props.formType === "New password: " | this.props.formType === "Password confirmation: ") {
      input = <input className="form-control" type={this.showPassword ? "text" : "password"} value={this.state.value} onChange={this.handleChange} id="myPassword"></input>
      see = <img src={img} alt={"See Password"} onMouseOver={this.mouseOverPass} onMouseOut={this.mouseOutPass} height='20' width='27' />
    }
    else {
      input = <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} id="myPassword"></input>
      see = <span>   </span>
    }
    return (
      <div>
        <label className="registerLabel">{this.props.formType}</label>
        <div className="container">
          <div class="row">
            <div class="col-10" >
              <>{input}</>
            </div>
            <div class="col-1">
              <>{see}</>
            </div>
            <div class="col-4">
              <GuideMessage guideM={this.guideMessage} flag1={this.flag} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default NameForm;