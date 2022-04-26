import React, { Component } from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import "../styles.css";
import NameForm from "../NameForm.js"
//import { ContactsData } from "../index.js"
import { Link } from 'react-router-dom'
import Database from "../Database";
import { useState } from "react";
import { userDetails } from "../index.js";

import ContactsData from "../Contacts/ContactsData";
import Yarin from "../Contacts/Yarin.jpg"
import RandomImage from "../ChatWindow/RandomImage";
import UnChosenContacts from "../Contacts/UnChosenContacts";
import unknownImg from "./unknown.png"


var flagList = { "userName": false, "password": false, "cnfPassword":false, "nickName": false };
export{flagList}
export default function Register() {

    const [errorMessage, setErrorMessage] = useState("");
    // const [isSubmitted, setIsSubmitted] = useState(false);

    
    
    const handleSubmit = () => {
        // console.log(flagList)
        if(!(flagList.nickName && flagList.password && flagList.userName && flagList.cnfPassword)){
            setErrorMessage("Note error comments please")
            return;
        }
        // Find user login info
        const userData = ContactsData.find((user) => user.name === userDetails.userName);

        // Compare user info
        if (!userData) {
            // setIsSubmitted(true);
            setErrorMessage("sucsses!");
            ContactsData.push({ name: userDetails.userName, password: userDetails.password, numOfMessages: "0",nickName: userDetails.nickName, pic: unknownImg });
            UnChosenContacts.push({ name: userDetails.userName, password: userDetails.password, numOfMessages: "0",nickName: userDetails.nickName, pic: unknownImg });
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


// export default function Register() {
    
//     const [errorMessage, setErrorMessage] = useState("");
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleSubmit = () => {
//         // Find user login info
//         const userData = ContactsData.find((user) => user.userName === userDetails.userName);

//         // Compare user info
//         if (!userData) {
//             setIsSubmitted(true);
//             setErrorMessage("sucsses");
//             ContactsData.push({ userName: userDetails.userName, password: userDetails.password, nickName: userDetails.nickName });
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