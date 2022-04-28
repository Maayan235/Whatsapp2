import React, { Component } from "react";
import "../styles.css";
import NameForm from "../NameForm.js"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { userDetails } from "../index.js";
import ContactsData from "../Contacts/ContactsData";
import UnChosenContacts from "../Contacts/UnChosenContacts";
import unknownImg from "./unknown.png"


var flagList = { "userName": false, "password": false, "cnfPassword":false, "nickName": false };
export{flagList}
export default function Register() {

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        if(!(flagList.nickName && flagList.password && flagList.userName && flagList.cnfPassword)){
            setErrorMessage("Note error comments please")
            return;
        }
        // Find user login info
        const userData = ContactsData.find((user) => user.name === userDetails.userName);

        // Compare user info
        if (!userData) {
            setErrorMessage("sucsses!");
            ContactsData.push({ name: userDetails.userName, password: userDetails.password, numOfMessages: "0",nickName: userDetails.nickName, pic: unknownImg, messages:[] });
            UnChosenContacts.push({ name: userDetails.userName, password: userDetails.password, numOfMessages: "0",nickName: userDetails.nickName, pic: unknownImg, messages:[]  });
        }
        else {
            setErrorMessage("username already exist");
        }
    };
    
    const loginLink = errorMessage === "sucsses!"? <Link className="nav-link" to={"/"}> Login Now!</Link> : <div></div>

    return (
        <div>
            <h3 className="title"> Register </h3>
            
                <NameForm formType={"Username: "}  />
            
                <NameForm formType={"New password: "}  />
           
                <NameForm formType={"Password confirmation: "}  />

                <NameForm formType={"Display Name: "}  />
            
            <div className="regButton">
                <button className="btn btn-primary btn-block" onClick={handleSubmit}>
                    register
                </button>
            </div>
            <div>
            </div>

            <div>
               <span>{errorMessage}{loginLink}</span> 
            </div>
            <div className="regButton">
            </div>
        </div>
    );
}