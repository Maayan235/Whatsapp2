import React, { useState } from 'react';
import AllContacts from '../Contacts/AllContacts';
import ContactsData from '../Contacts/ContactsData';
import AddContactsListResults from './AddContantListResult';
import AllContactsToAdd from './AllContactsToAdd';
import CloseButton from './CloseButton';
 
<<<<<<< HEAD
function AddContact({addContact, ContactsToAdd}) {
  const [isOpen, setIsOpen] = useState(false);
 
=======

function AddContact({addContact, ContactsToAdd}) {
  const [isOpen, setIsOpen] = useState(false);

>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const changeContacts = (key) => addContact(key);
<<<<<<< HEAD
 
  return (<div>
    <button type="button" onClick={togglePopup} className="btn btn-outline-primary position-absolute bottom-0 end-0 m-4">+</button>
    {isOpen && <CloseButton
      content={
        <div>
          <AllContactsToAdd addContact={changeContacts} ContactsToAdd={ContactsToAdd}/>
        </div>
      }
      handleClose={togglePopup}
    />}
  </div>);
}
 
export default AddContact;
=======

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
            <AllContactsToAdd addContact={changeContacts} removeAdd={togglePopup} ContactsToAdd={ContactsToAdd}/>
          </div>
        }
        handleClose={togglePopup}
      />}
    </div>
  </div>);

}
 
export default AddContact;


>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
