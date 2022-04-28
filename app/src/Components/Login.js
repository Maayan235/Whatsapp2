import React, { useState,  useCallback } from "react";
import "../styles.css";
import { Link } from 'react-router-dom'
import ContactsData from "../Contacts/ContactsData";

export default function Login({ isSubmitted, onSubmit, setUser }) {
    const [errorMessage, setErrorMessage] = useState({});

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
