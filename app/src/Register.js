import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import "./styles.css";

import NameForm from "./NameForm"
import { users } from "./index"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Database from "./Database";
import { useState } from "react";

var newUser = { userName: '', password: '', nickName: '' }
export { newUser };

export default function Register() {
    
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        // Find user login info
        const userData = users.find((user) => user.userName === newUser.userName);

        // Compare user info
        if (!userData) {
            setIsSubmitted(true);
            setErrorMessage("sucsses");
            users.push({ userName: newUser.userName, password: newUser.password, nickName: newUser.nickName });
        }
        else {
            // Username not found
            setErrorMessage("username already exist");
        }
    };

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
                <NameForm formType={"Display Name: "} inputBoxName={"Display name: "} />
            </div>
            <div className="regButton">
                <button onClick={handleSubmit}>
                    register
                </button>
            </div>
            <div>
                <Link to='/Database' > check database</Link>
            </div>

            <div>
                {errorMessage}
            </div>
        </>
    );
}


