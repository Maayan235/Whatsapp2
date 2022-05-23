import AddContactsListResults from "./AddContantListResult"
import Search from "../Contacts/SearchContact";
import {useState} from 'react';


function AllContactsToAdd({Id, addContact, ContactsToAdd, removeAdd}){

    const [contactsList, setContactsList] = useState(ContactsToAdd);
    const [showContactsList, setShowContactsList] = useState(ContactsToAdd);


    const changeContacts = (key) => {
        addContact(key);
        setContactsList(contactsList.filter(list => list !== key));
        setShowContactsList(showContactsList.filter(list => list !== key));
    };

    const togglePopup = () => removeAdd();


    const doSearch = function(query){
        setContactsList(showContactsList.filter((contact) => contact.name.includes(query)));
    }
    

    return(
        <div className="bg-light border">
            <Search doSearch={doSearch} />
            <AddContactsListResults Id={Id} relContacts={contactsList} removeAdd={togglePopup} addContact={changeContacts}/>
        </div>
    );
}


export default AllContactsToAdd;
