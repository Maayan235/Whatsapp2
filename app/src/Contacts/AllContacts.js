import ContactItem from './ContactItem';
import ContactsData from './ContactsData';
import img1 from'./img1.jpg'
import Search from './SearchContact';
import {useState} from 'react';
import ContactsListResults from './ContactsListResult';
import AddContact from '../AddContact/AddContact';
import MyContacts from './MyContacts';
import UnChosenContacts from "../Contacts/UnChosenContacts";




function AllContacts(){

    const [contactsList, setContactsList] = useState(MyContacts);
    const [contactsListToAdd, setContactsListToAdd] = useState(UnChosenContacts);


    const doSearch = function(query){
        setContactsList(MyContacts.filter((contact) => contact.name.includes(query)));
    }
    
    const addContact = function(item){
        setContactsList(state => [item, ...state]);
        setContactsListToAdd(contactsListToAdd.filter(list => list !== item));
        console.log(item);
        console.log(contactsList)
    }

    return(
        <div className="col-3 bg-light border vh-100 position-relative">
            <img src={img1} className="rounded-circle m-3" width="50" height="50"></img><span>My Name</span>
            <Search doSearch={doSearch} />
            <ContactsListResults relContacts={contactsList}/>
            <AddContact addContact={addContact} ContactsToAdd={contactsListToAdd}/>
        </div>
    );
}

export default AllContacts