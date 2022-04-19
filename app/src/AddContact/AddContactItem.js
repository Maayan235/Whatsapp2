import MyContacts from "../Contacts/MyContacts";
import { useState } from 'react';

function AddContactItem({item, addContact}) {

    function handleClick(e) {
        console.log(item.name);
        addContact(item);
      }

    return (
        <div>
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={handleClick}>
                <div className="fw-bold" >
                    <img src={item.pic} className="rounded-circle m-2" width="50" height="50"></img>
                    <span>{item.name}</span>
                </div>
            </li>
        </div>
    );
}

export default AddContactItem;