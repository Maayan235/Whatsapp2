import ContactItem from "./ContactItem";

function ContactsListResults({relContacts, username, setChatMember}){

    const handleClick = (key) => console.log(key);

    const contactsList = relContacts.map((contact, key)=>{
        if (contact.name !== username) {
            return (
                <div key={key} onClick={() => setChatMember(key)}>
                <ContactItem {...contact} key={key} ></ContactItem>
                </div>
            );
        }
    });     

    return(
            <ol className="list-group">
                {contactsList}
            </ol>
    );
}

export default ContactsListResults