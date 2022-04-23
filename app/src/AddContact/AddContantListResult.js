import ContactItem from "../Contacts/ContactItem";
import AddContactItem from "./AddContactItem";

<<<<<<< HEAD
function AllContactsListResults({relContacts, addContact}){

    const changeContacts = (key) => addContact(key);

    const contactsList = relContacts.map((contact, key)=>{
        return <AddContactItem item={contact} addContact={changeContacts} key={key}></AddContactItem>
=======
function AllContactsListResults({relContacts, addContact, removeAdd}){

    const changeContacts = (key) => addContact(key);

    const togglePopup = () => removeAdd();

    const contactsList = relContacts.map((contact, key)=>{
        return <AddContactItem item={contact} addContact={changeContacts} removeAdd={togglePopup} key={key}></AddContactItem>
>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
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