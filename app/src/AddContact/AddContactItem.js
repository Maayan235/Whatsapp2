import MyContacts from "../Contacts/MyContacts";
import { useState } from 'react';

<<<<<<< HEAD
function AddContactItem({item, addContact}) {
=======
function AddContactItem({item, addContact, removeAdd}) {
>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d

    function handleClick(e) {
        console.log(item.name);
        addContact(item);
<<<<<<< HEAD
=======
        removeAdd();
>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
      }

    return (
        <div>
<<<<<<< HEAD
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={handleClick}>
=======
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={handleClick}>
>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
                <div className="fw-bold" >
                    <img src={item.pic} className="rounded-circle m-2" width="50" height="50"></img>
                    <span>{item.name}</span>
                </div>
            </li>
        </div>
    );
}

export default AddContactItem;