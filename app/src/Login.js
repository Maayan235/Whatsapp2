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
        <div className="position-absolute top-50 start-50 translate-middle border border-4 w-50 h-50 rounded ">
            <h1 className="title m-3"> Login </h1>
            <div className="p-3">
                <NameForm formType={"userDetails: "} inputBoxName={"Username: "} />
            </div>
            <div className="p-3">
                <NameForm formType={"newPassword: "} inputBoxName={"Password: "} />
            </div>
            
            <div className="regButton">
                <button onClick={handleSubmit} className="btn btn-secondary btn-lg">
                    Login
                </button>
            </div>
            
            <div>
                {errorMessage}
            </div>
        </div>
    );
}
