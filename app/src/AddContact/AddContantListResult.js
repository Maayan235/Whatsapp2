import ContactItem from "../Contacts/ContactItem";
import AddContactItem from "./AddContactItem";

function AllContactsListResults({relContacts, addContact}){

    const changeContacts = (key) => addContact(key);

    const contactsList = relContacts.map((contact, key)=>{
        return <AddContactItem item={contact} addContact={changeContacts} key={key}></AddContactItem>
    });     
    

    return(
        <div>
            <ol className="list-group">
                {contactsList}
            </ol>
        </div>
    );
}

export default AllContactsListResults;