import ContactItem from "./ContactItem";

function ContactsListResults({relContacts, id, setChatMember, removeItem, chosenChatMember,lastMessage, lastList}){
//    console.log(relContacts);
    const changeChat = (key) => setChatMember(key);
    console.log(lastList);
    const removeContact = function (contact) {
        removeItem(contact);
    }
    const contactsList = relContacts.map((contact, key)=>{
        contact["chatLast"]=lastList[contact.id]
        return (
            // <div key={key} onClick={() => handleClick(key)}>
            <div  key={key}>
                <ContactItem item={contact} contacts={relContacts} removeItem={removeContact} key={key} setChatMember={changeChat} lastMessage={lastMessage} ableToDelete={false}></ContactItem>
            </div>
        );      
    });     

    return(
        <div className="contacts">
            <ol className="list-group" role="tablist">
                {contactsList}
            </ol>
        </div>
    );
}

export default ContactsListResults