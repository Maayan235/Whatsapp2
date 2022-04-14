import React, { Component } from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import "../styles.css";

import NameForm from "../NameForm.js"
import { users } from "../index.js"
import { Link } from 'react-router-dom'
import Database from "../Database";
import { useState } from "react";
import { userDetails } from "../index.js";


export default function Register() {
    
    const [errorMessage, setErrorMessage] = useState("");
    // const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        // Find user login info
        const userData = users.find((user) => user.userName === userDetails.userName);

        // Compare user info
        if (!userData) {
            // setIsSubmitted(true);
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
                <Link to='../Database' > check database</Link>
            </div>

            <div>
                {errorMessage}
            </div>
            <Link className = "landButtons" to='/Login'><button>  Login  </button> </Link>
        </div>
    );
}


// export default function Register() {
    
//     const [errorMessage, setErrorMessage] = useState("");
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleSubmit = () => {
//         // Find user login info
//         const userData = users.find((user) => user.userName === userDetails.userName);

//         // Compare user info
//         if (!userData) {
//             setIsSubmitted(true);
//             setErrorMessage("sucsses");
//             users.push({ userName: userDetails.userName, password: userDetails.password, nickName: userDetails.nickName });
//         }
//         else {
//             // Username not found
//             setErrorMessage("username already exist");
//         }
//     };
        
//     return (
//         <div>
//             <h1 className="title"> Register now </h1>
//             <div className="form-group">
//                 <NameForm formType={"userDetails: "} inputBoxName={"Username: "} />
//             </div>
//             <div className="form-group">
//                 <NameForm formType={"newPassword: "} inputBoxName={"Password: "} />
//             </div>
//             <div className="form-group">
//                 <NameForm formType={"Display Name: "} inputBoxName={"Display name: "} />
//             </div>
//             <div className="regButton">
//                 <button onClick={handleSubmit}>
//                     register
//                 </button>
//             </div>
//             <div>
//                 <Link to='../Database' > check database</Link>
//             </div>

//             <div>
//                 {errorMessage}
//             </div>
//             <Link className = "landButtons" to='/Login'><button>  Login  </button> </Link>
//         </div>
//     );
// }



// 
// 
// import React, { Component } from "react";
// export default class SignUp extends Component {
//     render() {
//         return (
//             <form>
//                 <h3>Sign Up</h3>
//                 <div className="form-group">
//                     <label>First name</label>
//                     <input type="text" className="form-control" placeholder="First name" />
//                 </div>
//                 <div className="form-group">
//                     <label>Last name</label>
//                     <input type="text" className="form-control" placeholder="Last name" />
//                 </div>
//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email" />
//                 </div>
//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
//                 <p className="forgot-password text-right">
//                     Already registered <a href="#">sign in?</a>
//                 </p>
//             </form>
//         );
//     }
// }