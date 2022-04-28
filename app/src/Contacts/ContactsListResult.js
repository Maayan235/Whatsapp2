import ContactItem from "./ContactItem";

function ContactsListResults({relContacts, username, setChatMember, chosenChatMember}){

    const changeChat = (key) => setChatMember(key);

    const contactsList = relContacts.map((contact, key)=>{
        return (
            // <div key={key} onClick={() => handleClick(key)}>
            <div  key={key}>
                <ContactItem item={contact} key={key} setChatMember={changeChat}></ContactItem>
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