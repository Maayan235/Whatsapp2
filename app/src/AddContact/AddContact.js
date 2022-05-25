import React, { useState,  useCallback } from "react";
import "../styles.css";
import unknownImg from "../Components/unknown.png"
import ContactItem from "../Contacts/ContactItem";

import AllContactsToAdd from './AllContactsToAdd';
import CloseButton from './CloseButton';
 

function  AddContact({id, addContact, className, userData, removeItem, relContacts, editContact}) {
  const [isOpen, setIsOpen] = useState(false);
  const [RemoveIsOpen, setRemoveIsOpen] = useState(false);
  const [EditIsOpen, setEditIsOpen] = useState(false);


  const toggleAddPopup = () => {
    setIsOpen(!isOpen);
  }
  const toggleRemovePopup = () => {
    setRemoveIsOpen(!RemoveIsOpen);
  }
  const toggleEditPopup = () => {
    setEditIsOpen(!EditIsOpen);
  }

 

    const removeContact = function (contact) {
        removeItem(contact);
    }
    const contactsList = relContacts.map((contact, key)=>{
        return (
            // <div key={key} onClick={() => handleClick(key)}>
            <div  key={key}>
                <ContactItem item={contact} contacts={relContacts} removeItem={removeContact} key={key}></ContactItem>
            </div>
        );      
    });     
    const EditContactsList = relContacts.map((contact, key)=>{
      return (
          // <div key={key} onClick={() => handleClick(key)}>
          <div  key={key}>
              <ContactItem item={contact} contacts={relContacts} editItem={editContact} key={key}></ContactItem>
          </div>
      );      
  }); 
    


  const [errorMessage, setErrorMessage] = useState("");

  const errors = {
      uname: "User doesn't exist",
      exist: "User already added!",
      success: "Contact added!"
  };

  // JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessage.name && (
  <div className="error">{errorMessage.message}</div>
  );


  async function addNewContact (thisUser, userDetails){
    
    const res = await fetch("http://localhost:5286/api/contacts/" , {
    
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({id : userDetails.id, name : userDetails.name, server : userDetails.server})});  
            console.log(res);
          if(res.status==404){
            //console.log("not 201..")
            setErrorMessage({ name: "uname", message: errors.uname });
          }else if(res.status==400){
            setErrorMessage({ name: "uname", message: errors.exist });
          }    
          else{
            setErrorMessage({ name: "uname", message: errors.success });
              addContact(userDetails);
          }   
            
}

async function addNContact (thisUser, userDetails){
    
  const res = await fetch("http://localhost:5286/api/invitations/" , {
  
          method : 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({id : userDetails.id, name : userDetails.name, server : userDetails.server})});  
          console.log(res);
        if(res.status==404){
          //console.log("not 201..")
          setErrorMessage({ name: "uname", message: errors.uname });
        }else if(res.status==400){
          setErrorMessage({ name: "uname", message: errors.exist });
        }    
        else{
          setErrorMessage({ name: "uname", message: errors.success });
            addContact(userDetails);
        }   
          
}



async function addContactToOtherServer (thisUser,otherUser){
            const res = await fetch("http://" + otherUser.server+ "/api/invitations",{
    
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({from : thisUser.id,to: thisUser.id, server: thisUser.server})});  
            console.log(res);
          if(res.status!=201){
            //console.log("not 201..")
            setErrorMessage({ name: "uname", message: errors.uname });
          }    
}
  const handleSubmit = useCallback(event => {
    // Prevent page reload
    event.preventDefault();

    var { uname, server, name } = document.
    forms[0];

    var contact = {id : uname.value, server: server.value, name: name.value, profilePicSrc: unknownImg}
    console.log("form details:")
    console.log(contact);
    

    //addNContact(userData, contact );    
      addNewContact(userData, contact );
      if(userData.server != server.value){
        addContactToOtherServer(userData, contact)
        console.log("add to other server...")
      }
    else{

    }
    

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
    <span><button type="button" className="btn btn-outline-dark position-absolute top-0 end-0 m-2" id="addButton" onClick={toggleAddPopup}>{isOpen ? 'x' : '+'}</button></span>
   <span> <button type="button" className="btn btn-outline-dark position-absolute top-0 end-0 m-4" id="removeButton" onClick={toggleRemovePopup}>{RemoveIsOpen ? 'x' : '-'}</button></span>
   <span> <button type="button" className="btn btn-outline-dark position-absolute top-0 end-0 m-6" id="editButton" onClick={toggleEditPopup}>{EditIsOpen ? 'x' : 'e'}</button></span>
    <span>
    <div style={mystyle}>
    
      {isOpen && <CloseButton 
        content={
          <div>
          
          <form>
    <h3>Add contact</h3>
    <div className="form-group">
        <label>Username</label>
        <input  className="form-control" placeholder="id" name="uname" required/>
        
    </div>
    <p></p> 
    <div className="form-group">
        <label>name</label>
        <input className="form-control" placeholder="name" name="name" required/>
    </div>
    <div className="form-group">
        <label>Server name</label>
        <input  className="form-control" placeholder="Server name" name="server" required/>
        
    </div>
    <div className="">        {renderErrorMessage("uname")}    </div>
    <div className="regButton">
    
    <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
       
       Add
    </button>
    </div>
    
    </form>

    
          {// <AllContactsToAdd  id={id} addContact={changeContacts} removeAdd={togglePopup} ContactsToAdd={ContactsToAdd}/>
          
                   }
                   
  </div>
        }
        
        handleClose={toggleAddPopup}
      />}
      </div>
      </span>
    
        <span>
    <div style={mystyle}>
    {RemoveIsOpen && <CloseButton 
      content={
        
        <div className="contacts">
        <ol className="list-group" role="tablist">
            {contactsList}
        </ol>
    </div>
        } handleClose={toggleRemovePopup}
        />}
        </div>
        </span>


        <div style={mystyle}>
        {EditIsOpen && <CloseButton 
          content={
            
            <div className="contacts">
            <ol className="list-group" role="tablist">
                {EditContactsList}
            </ol>
        </div>
            } handleClose={toggleEditPopup}
            />}
            </div>
            



  </div>);

}
 
export default AddContact;


