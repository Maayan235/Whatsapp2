import ContactsData from "../Contacts/ContactsData";
import AddContactsListResults from "./AddContantListResult"
import Search from "../Contacts/SearchContact";
import ContactsListResults from "../Contacts/ContactsListResult";
import {useState} from 'react';


<<<<<<< HEAD
function AllContactsToAdd({addContact, ContactsToAdd}){

    const [contactsList, setContactsList] = useState(ContactsToAdd);
=======
function AllContactsToAdd({addContact, ContactsToAdd, removeAdd}){

    const [contactsList, setContactsList] = useState(ContactsToAdd);
    const [showContactsList, setShowContactsList] = useState(ContactsToAdd);

>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d

    const changeContacts = (key) => {
        addContact(key);
        setContactsList(contactsList.filter(list => list !== key));
<<<<<<< HEAD
        // console.log(MyContacts);
        // UnChosenContacts.filter(list => list !== key)
    };

    const doSearch = function(query){
        setContactsList(contactsList.filter((contact) => contact.name.includes(query)));
=======
        setShowContactsList(showContactsList.filter(list => list !== key));
    };

    const togglePopup = () => removeAdd();


    const doSearch = function(query){
        setContactsList(showContactsList.filter((contact) => contact.name.includes(query)));
>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
    }
    

    return(
        <div className="bg-light border">
            <Search doSearch={doSearch} />
<<<<<<< HEAD
            <AddContactsListResults relContacts={contactsList} addContact={changeContacts}/>
=======
            <AddContactsListResults relContacts={contactsList} removeAdd={togglePopup} addContact={changeContacts}/>
>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
        </div>
    );
}


export default AllContactsToAdd;
