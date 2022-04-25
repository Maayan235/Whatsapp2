import ContactItem from "./ContactItem";

function ContactsListResults({relContacts, username, setChatMember,}){


    const handleClick = (key) => {setChatMember(key)
        relContacts[key].numOfMessages = "0";
    };


    const contactsList = relContacts.map((contact, key)=>{
        if (contact.name !== username) {
            return (
                <div key={key} onClick={() => handleClick(key)}>
                <ContactItem {...contact} key={key}></ContactItem>
                </div>
            );
        }
      
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