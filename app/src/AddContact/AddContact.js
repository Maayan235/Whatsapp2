import React, { useState } from 'react';
import AllContactsToAdd from './AllContactsToAdd';
import CloseButton from './CloseButton';
 

function AddContact({username, addContact, ContactsToAdd}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

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
            <AllContactsToAdd  username={username} addContact={changeContacts} removeAdd={togglePopup} ContactsToAdd={ContactsToAdd}/>
          </div>
        }
        handleClose={togglePopup}
      />}
    </div>
  </div>);

}
 
export default AddContact;


