import React from "react";
import "./styles.css";

import NameForm from "./NameForm"
import { users } from "./index"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { userDetails } from "./index";
export default function Login() {

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        // Find user login info
        const userData = users.find((user) => user.userName === userDetails.userName);

        // Compare user info
        if (userData) {
            setIsSubmitted(true);
            setErrorMessage("sucsses");
        }
        else {
            // Username not found
            setErrorMessage("username doesn't exist");
        }
    };
    return(
        <>
            <h1 className="title"> Login page </h1>
            <div>
                <NameForm formType={"userDetails: "} inputBoxName={"Username: "} />
            </div>
            <div>
                <NameForm formType={"newPassword: "} inputBoxName={"Password: "} />
            </div>
            
            <div className="regButton">
                <button onClick={handleSubmit}>
                    Login
                </button>
            </div>
            
            <div>
                {errorMessage}
            </div>
        </>
    );
}