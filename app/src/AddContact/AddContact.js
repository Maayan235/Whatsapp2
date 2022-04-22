import React, { useState } from 'react';
import AllContacts from '../Contacts/AllContacts';
import ContactsData from '../Contacts/ContactsData';
import AddContactsListResults from './AddContantListResult';
import AllContactsToAdd from './AllContactsToAdd';
import CloseButton from './CloseButton';
 
function AddContact({addContact, ContactsToAdd}) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const changeContacts = (key) => addContact(key);
 
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
