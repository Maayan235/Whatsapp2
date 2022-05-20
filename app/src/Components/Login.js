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


    // function async checkUser(username){
    //     const res = await fetch("http://localhost:5286/api/UsersAPI/" + userName);
    //     if(res != null){

    //     }
    // }
    async function postUser(username){
        const res = await fetch("http://localhost:5286/api/UsersAPI/logIn",{
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({UserName:username })});  
                // Chats: user.Chats, ProfilePicSrc: user.ProfilePicSrc, ServerName: user.ServerName,Id: user.Id, UserName : user.userName, Password: user.password, NickName: user.nickName, Contacts:user.contacts
            }
    async function checkUser(uname,pass){
        // let promise = new Promise((res, rej) => {
        //     setTimeout(() => res(fetch("http://localhost:5286/api/UsersAPI/" + uname)), 1000)
        // });
        const user = await fetch("http://localhost:5286/api/UsersAPI/" + uname.value);
        //const user = await promise;
        console.log(user);
        const userData = await user.json();
        console.log(userData)
        //setTimeout(2500);
        
        console.log("uname:" +uname.value)
        console.log("serverRet" + userData.userName)
        if (userData.userName == uname.value) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessage({ name: "pass", message: errors.pass });
              } else {
                postUser(uname.value);
                setUser(userData);
                onSubmit(true);
                
              }
        }
        else {
            // Username not found
            setErrorMessage({ name: "uname", message: errors.uname });
        }
        return userData;
    }

    const handleSubmit = useCallback(event => {
        // Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.
        forms[0];

        // Find user login info
        
       var userData =checkUser(uname, pass)
        //const userData = ContactsData.find((user) => user.name === uname.value);
        // Compare user info

        //console.log(userData.userName);
        //console.log(userData);
        

        
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
