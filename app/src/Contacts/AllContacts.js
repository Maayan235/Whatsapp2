import ContactItem from './ContactItem';
import ContactsData from './ContactsData';
import img1 from'./img1.jpg'
import Search from './SearchContact';
import {useState} from 'react';
import ContactsListResults from './ContactsListResult';


function AllContacts(){

    const [contactsList, setContactsList] = useState(ContactsData);

    const doSearch = function(query){
        setContactsList(ContactsData.filter((contact) => contact.name.includes(query)));
    }
    
    return(
        <div className="col-3 bg-light border vh-100">
            <img src={img1} className="rounded-circle m-3" width="50" height="50"></img><span>My Name</span>
            <Search doSearch={doSearch} />
            <ContactsListResults relContacts={contactsList}/>
        </div>
    );
}




export default AllContacts