import ContactItem from './ContactItem';
import ContactsData from './ContactsData';
import Search from './SearchContact';
import {useState} from 'react';
import ContactsListResults from './ContactsListResult';


function AllContacts({username, setChatMember}){

    const [contactsList, setContactsList] = useState(ContactsData);

    const userData = ContactsData.find((user) => user.name === username);

    const doSearch = function(query){
        setContactsList(ContactsData.filter((contact) => contact.name.includes(query)));
    }

    const changeChat = (key) => setChatMember(key);

    return(
        <div className="col-3 bg-light border vh-100">
            <img src={userData.pic} className="rounded-circle m-3" width="50" height="50"></img><span>{userData.name}</span>
            <Search doSearch={doSearch} />
            <ContactsListResults relContacts={contactsList}  username={username} setChatMember={changeChat}/>
        </div>
    );
}




export default AllContacts