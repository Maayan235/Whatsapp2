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
                <ContactItem item={contact} contacts={relContacts} removeItem={removeContact} key={key} ableToDelete={true}></ContactItem>
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
          if(res.status!=201){
            //console.log("not 201..")
            setErrorMessage({ name: "uname", message: errors.uname });
          }
          else{
            // setErrorMessage({ name: "uname", message: errors.success });
              addContact(userDetails);
          }   
            
}
console.log("stam")



async function addNContact (thisUser, userDetails){
    
  const res = await fetch("http://localhost:5286/api/invitations/" , {
  
          method : 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({id : userDetails.id, name : userDetails.name, server : userDetails.server})});  
          console.log(res);
        if(res.status!=201){
          //console.log("not 201..")
          setErrorMessage({ name: "uname", message: errors.uname });
        }    
        else{
            addContact(userDetails);
        }   
          
}



async function addContactToOtherServer (thisUser,otherUser){
            const res = await fetch("http://" + otherUser.server+ "/api/invitations",{
    
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({from : thisUser.id,to: otherUser.id, server: thisUser.server})});  
            console.log(res);
          if(res.status!=201){
            //console.log("not 201..")
            setErrorMessage({ name: "uname", message: errors.uname });
          }else{
            addContact(otherUser);
          }
}
  const handleSubmit = useCallback(event => {
    // Prevent page reload
    event.preventDefault();

    var { uname, server, name } = document.
    forms[0];
    var contact = {id : uname.value, server: server.value, name: name.value, profilePicSrc: unknownImg}
    
    setErrorMessage({ name: "uname", message: errors.success });
    
    if(id == uname.value || relContacts.find(c => c.id == uname.value) != null){
        setErrorMessage({ name: "uname", message: errors.exist });
    }else{
      
      if(userData.server != server.value){
        addNewContact(userData, contact );
       // addContactToOtherServer(userData, contact)
        console.log("add to other server...")
        console.log(contact)
      }else{
        addNewContact(userData, contact );
      }
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

  return (
    <div className='m-3 top-0 end-0 w-50 position-absolute' >
      <div className="list-group list-group-horizontal">
        <button type="button" className="p-1 m-1 border rounded position-relative list-group-item btn btn-outline-dark" id="addButton" onClick={toggleAddPopup}><img src="https://static.thenounproject.com/png/196436-200.png" height='30' width='30' alt={"+"} className="p-0"></img></button>
        <button type="button" className="p-1 m-1 border rounded position-relative list-group-item btn btn-outline-dark" id="removeButton" onClick={toggleRemovePopup}><img src="https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-HD-Image.png" height='30' width='30' alt={"delete"} className="p-0"></img></button>
        <button type="button" className="p-1 m-1 border rounded position-relative list-group-item btn btn-outline-dark" id="editButton" onClick={toggleEditPopup}><img src="https://icon-library.com/images/user001_edit-512.png" height='30' width='30' alt={"edit"} className="p-0"></img></button>
      </div>
    <span>
      <div style={mystyle}>

        {isOpen && <CloseButton
          content={
            <div>

              <form>
                <h3>Add contact</h3>
                <button type="button" className="m-1 end-0 top-0 position-absolute btn btn-outline-dark" id="addButton" onClick={toggleAddPopup}>X</button>
                <div className="form-group">
                  <label>Username</label>
                  <input className="form-control" placeholder="id" name="uname" required />

                </div>
                <p></p>
                <div className="form-group">
                  <label>name</label>
                  <input className="form-control" placeholder="name" name="name" required />
                </div>
                <div className="form-group">
                  <label>Server name</label>
                  <input className="form-control" placeholder="Server name" name="server" required />

                </div>
                <div className="">        {renderErrorMessage("uname")}    </div>
                <div className="regButton">

                  <button type="submit" className="btn btn-primary btn-block m-2" onClick={handleSubmit}>

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
          <div>
            <h3>Remove contacts</h3>
            <button type="button" className="m-1 end-0 top-0 position-absolute btn btn-outline-dark" id="addButton" onClick={toggleRemovePopup}>X</button>
          </div>
          <div>
            <ol className="list-group" role="tablist">
              {contactsList}
            </ol>
          </div>

    </div>
        } handleClose={toggleRemovePopup}
        />}
        </div>
        </span>


        <div style={mystyle}>
        {EditIsOpen && <CloseButton 
          content={
            
            <div className="contacts">
            <div>
              <h3>Edit contacts</h3>
              <button type="button" className="m-1 end-0 top-0 position-absolute btn btn-outline-dark" id="addButton" onClick={toggleEditPopup}>X</button>
            </div>
            <div>
              <ol className="list-group" role="tablist">
                {EditContactsList}
              </ol>
            </div>

        </div>
            } handleClose={toggleEditPopup}
            />}
            </div>
            



  </div>);

}
 
export default AddContact;


