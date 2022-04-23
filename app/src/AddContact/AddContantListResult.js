import ContactItem from "../Contacts/ContactItem";
import AddContactItem from "./AddContactItem";

function AllContactsListResults({relContacts, addContact, removeAdd}){

    const changeContacts = (key) => addContact(key);

    const togglePopup = () => removeAdd();

    const contactsList = relContacts.map((contact, key)=>{
        return <AddContactItem item={contact} addContact={changeContacts} removeAdd={togglePopup} key={key}></AddContactItem>
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