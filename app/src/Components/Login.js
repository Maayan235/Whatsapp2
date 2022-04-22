import React, { Component, useState,  useCallback } from "react";
import "../styles.css";

import NameForm from "../NameForm"
import { users, userDetails } from "../index"
import { Link } from 'react-router-dom'

import Database from '../Database';
import AllContacts from '../Contacts/AllContacts';
import ContactsData from "../Contacts/ContactsData";
import loggedUserName from "../Contacts/ContactsData";
import Chat from '../ChatWindow/Chat';
import App from "../App";
import Register from "./Register.js";


export default function Login({ isSubmitted, onSubmit, setUser }) {
    const [errorMessage, setErrorMessage] = useState({});
    // const [submitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "Username doesn't exist",
        pass: "Wrong password"
    };

    // JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessage.name && (
    <div className="error">{errorMessage.message}</div>
    );

    const handleSubmit = useCallback(event => {
        // Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = ContactsData.find((user) => user.name === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessage({ name: "pass", message: errors.pass });
              } else {
                onSubmit(true);
                setUser(userData.name);
              }
        }
        else {
            // Username not found
            setErrorMessage({ name: "uname", message: errors.uname });
        }
    }, [onSubmit])

// JSX code for login form
  const renderForm = ( 
    <form>
    <h3>Sign In</h3>
    <div className="form-group">
        <label>Username</label>
        <input type="email" className="form-control" placeholder="Enter username" name="uname" required/>
        {renderErrorMessage("uname")}
    </div>
    <p></p> 
    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" name="pass" required/>
        {renderErrorMessage("pass")}
    </div>
    <div className="regButton">
    <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
        Login
    </button>
    </div>
    <div className="regButton">
        <Link className="nav-link" to={"./Register"}>Don't have a user? Register Now!</Link>
    </div>
    </form>
    );
    
    return (
        <div>
            {renderForm}
        </div>
    );
}

// remmeber me button
// <div className="form-group">
// <div className="custom-control custom-checkbox">
//     <input type="checkbox" className="custom-control-input" id="customCheck1" />
//     <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
// </div>
// </div>

// forgot your password?
// <p className="forgot-password text-right">
// <a href="#">Forgot your password?</a>
// </p>
// <p></p>
