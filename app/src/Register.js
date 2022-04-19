import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import "./styles.css";

import NameForm from "./NameForm"
import { users } from "./index"
import { Link } from 'react-router-dom'
import {Database} from "./Database";
import { useState } from "react";
import { userDetails } from "./index";


export default function Register() {
    
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        // Find user login info
        const userData = users.find((user) => user.name === userDetails.userName);

        // Compare user info
        if (!userData) {
            setIsSubmitted(true);
            setErrorMessage("sucsses");
            users.push({ userName: userDetails.userName, password: userDetails.password, nickName: userDetails.nickName });
        }
        else {
            // Username not found
            setErrorMessage("username already exist");
        }
    };

    return (
        <div>
            <h1 className="title"> register page </h1>
            <div>
                <NameForm formType={"userDetails: "} inputBoxName={"Username: "} />
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
            <Link className = "landButtons" to='/Login'><button>  Login  </button> </Link>
        </div>
    );
}


