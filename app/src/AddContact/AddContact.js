import React, { useState,  useCallback } from "react";
import "../styles.css";
import unknownImg from "../Components/unknown.png"

import AllContactsToAdd from './AllContactsToAdd';
import CloseButton from './CloseButton';
 

function AddContact({username, addContact, userData}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [errorMessage, setErrorMessage] = useState("");

  const errors = {
      uname: "User doesn't exist",
      success: "Contact added!"
  };

  // JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessage.name && (
  <div className="error">{errorMessage.message}</div>
  );


  async function addNewContact (userDetails){
    const res = await fetch("http://localhost:5286/api/UsersAPI/addContact",{
    
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({UserName : userDetails.userName,ServerName: userDetails.serverName, NickName: userDetails.nickName})});  
            console.log(res);
          if(res.status!=201){
            //console.log("not 201..")
            setErrorMessage({ name: "uname", message: errors.uname });
          }    
          else{
              addContact(userDetails); 
          }   
            
}
//   async function checkUser(uname,ServerName){
    
//     const user = await fetch("http://localhost:5286/api/UsersAPI/" + uname.value);
    
//     console.log(user);
//     const userData = await user.json();
//     console.log(userData)
    

//     console.log("uname:" +uname.value)
//     console.log("serverRet" + userData.userName)
//     if (userData.userName == uname.value) {
//       if (userData.ServerName !== ServerName.value) {
//         // Invalid password
//         setErrorMessage({ name: "serverName", message: errors.ServerName });
//       } else {
//         addNewContact(userData);
//         //setUser(userData);
//         //onSubmit(true);
        
//       }      
      
//     }
//     else {
//         // Username not found
//         setErrorMessage({ name: "uname", message: errors.uname });
//     }
//     return userData;
// }

  const handleSubmit = useCallback(event => {
    // Prevent page reload
    event.preventDefault();

    var { uname, ServerName, nickName } = document.
    forms[0];

    var user = {userName : uname.value, serverName: ServerName.value, nickName: nickName.value, profilePicSrc: unknownImg}
    console.log("form details:")
    console.log(user);
    addNewContact(user);
  })




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
        <input  className="form-control" placeholder="username" name="uname" required/>
        
    </div>
    <p></p> 
    <div className="form-group">
        <label>NickName</label>
        <input className="form-control" placeholder="nickname" name="nickName" required/>
    </div>
    <div className="form-group">
        <label>Server name</label>
        <input  className="form-control" placeholder="Server name" name="ServerName" required/>
        
    </div>
    <div className="">        {renderErrorMessage("uname")}    </div>
    <div className="regButton">
    
    <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
       
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


