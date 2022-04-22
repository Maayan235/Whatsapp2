import ContactsData from "../Contacts/ContactsData";
import AddContactsListResults from "./AddContantListResult"
import Search from "../Contacts/SearchContact";
import ContactsListResults from "../Contacts/ContactsListResult";
import {useState} from 'react';


function AllContactsToAdd({addContact, ContactsToAdd}){

    const [contactsList, setContactsList] = useState(ContactsToAdd);

    const changeContacts = (key) => {
        addContact(key);
        setContactsList(contactsList.filter(list => list !== key));
        // console.log(MyContacts);
        // UnChosenContacts.filter(list => list !== key)
    };

    const doSearch = function(query){
        setContactsList(contactsList.filter((contact) => contact.name.includes(query)));
    }
    

    return(
        <div className="bg-light border">
            <Search doSearch={doSearch} />
            <AddContactsListResults relContacts={contactsList} addContact={changeContacts}/>
        </div>
    );
}


export default AllContactsToAdd;
