import AddContactItem from "./AddContactItem";

function AllContactsListResults({Id, relContacts, addContact, removeAdd}){

    const changeContacts = (key) => addContact(key);

    const togglePopup = () => removeAdd();
    
    const contactsList = relContacts.map((contact, key)=>{
        if (contact.name !== Id) {
            return <AddContactItem item={contact} addContact={changeContacts} removeAdd={togglePopup} key={key}></AddContactItem>
        }
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