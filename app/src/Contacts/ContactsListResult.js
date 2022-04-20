import ContactItem from "./ContactItem";

function ContactsListResults({relContacts}){
    console.log(relContacts, "relContacts");

    const contactsList = relContacts.map((contact, key)=>{
        return <ContactItem {...contact} key={key}></ContactItem>
    });     

    return(
            <ol className="list-group">
                {contactsList}
            </ol>
    );
}

export default ContactsListResults