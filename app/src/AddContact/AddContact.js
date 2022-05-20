import React, { useState,  useCallback } from "react";
import "../styles.css";

import AllContactsToAdd from './AllContactsToAdd';
import CloseButton from './CloseButton';
 

function AddContact({username, addContact, userData}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [errorMessage, setErrorMessage] = useState({});

  const errors = {
      uname: "Username doesn't exist",
      ServerName: "Wrong Server name"
  };

  // JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessage.name && (
  <div className="error">{errorMessage.message}</div>
  );


  async function checkUser(uname,ServerName){
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
      if (userData.ServerName !== ServerName.value) {
        // Invalid password
        setErrorMessage({ name: "serverName", message: errors.ServerName });
      } else {
        addContact(uname.value);
        //setUser(userData);
        //onSubmit(true);
        
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

    var { uname, ServerName } = document.
    forms[0];
    var userData =checkUser(uname, ServerName)
  })[handleSubmit]




  const changeContacts = (key) => addContact(key);

  const mystyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    background: "#FFF",
    "z-index": "200",
    "box-shadow": "#000 0 2px 18px"
  };

  return (<div className='border rounded' >
    <button type="button" className="btn btn-outline-dark position-absolute top-0 end-0 m-3" id="addButton" onClick={togglePopup}>{isOpen ? 'x' : '+'}</button>
    <div style={mystyle}>
      {isOpen && <CloseButton 
        content={
          <div>
          



          <form>
    <h3>Add contact</h3>
    <div className="form-group">
        <label>Username</label>
        <input type="email" className="form-control" placeholder="username" name="uname" required/>
        {renderErrorMessage("uname")}
    </div>
    <p></p> 
    <div className="form-group">
        <label>NickName</label>
        <input type="email" className="form-control" placeholder="nickname" name="nickName" required/>
    </div>
    <div className="form-group">
        <label>Server name</label>
        <input type="email" className="form-control" placeholder="Server name" name="ServerName" required/>
        {renderErrorMessage("ServerName")}
    </div>
    <div className="regButton">
    <button type="submit" className="btn btn-primary btn-block" >
    
    { 
      //onClick={handleSubmit}>
      } 
       Add
    </button>
    </div>
    
    </form>

    
          {// <AllContactsToAdd  username={username} addContact={changeContacts} removeAdd={togglePopup} ContactsToAdd={ContactsToAdd}/>
          
                   }
                   
  </div>
        }
        handleClose={togglePopup}
      />}
    </div>
  </div>);

}
 
export default AddContact;


