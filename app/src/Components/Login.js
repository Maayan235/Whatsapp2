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


    // function async checkUser(id){
    //     const res = await fetch("http://localhost:5286/api/UsersAPI/" + id);
    //     if(res != null){

    //     }
    // }
    async function postUser(id2, userData){
        
        const res = await fetch("http://localhost:5286/api/logIn",{
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({id:id2 })}); 
                console.log(res)
                if(res.status == 201){
                    signIn(id2,userData);
                } 
                // Chats: user.Chats, ProfilePicSrc: user.ProfilePicSrc, server: user.server,Id: user.id, id : user.id, Password: user.password, name: user.name, Contacts:user.contacts
            }
            async function signIn(uname, userData){
                console.log("in sign in...")
                const res = await fetch("http://localhost:5286/api/signIn/" +uname,{
            
                    method : 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({})});
                    console.log(res)
                    if(res.status == 200){
                        setUser(userData);
                        onSubmit(true);
                    } 
                }
    async function checkUser(uname,pass){
        
        const user = await fetch("http://localhost:5286/api/getUser/" + uname.value);
        //const user = await promise;
        console.log(user);
        const userData = await user.json();
        console.log(userData);
        //setTimeout(2500);
        
        console.log("uname:" +uname.value)
        console.log("serverRet" + userData.id)
        if (userData.id == uname.value) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessage({ name: "pass", message: errors.pass });
              } else {
                ContactsData.push({});
                postUser(uname.value, userData);
                // signIn(uname.value);
                
                
              }
        }
        else {
            // id not found
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

        //console.log(userData.id);
        //console.log(userData);
        

        
    }, [onSubmit])

// JSX code for login form
  const renderForm = ( 
    <form>
    <h3>Sign In</h3>
    <div className="form-group">
        <label>Username</label>
        <input type="email" className="form-control" placeholder="Enter id" name="uname" required/>
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
