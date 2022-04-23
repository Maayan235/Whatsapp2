import ContactItem from "./ContactItem";

function ContactsListResults({relContacts, username, setChatMember}){

<<<<<<< HEAD
    const handleClick = (key) => console.log(key);
=======
    const handleClick = (key) => {setChatMember(key)
        relContacts[key].numOfMessages = "0";
    };

>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d

    const contactsList = relContacts.map((contact, key)=>{
        if (contact.name !== username) {
            return (
<<<<<<< HEAD
                <div key={key} onClick={() => setChatMember(key)}>
=======
                <div key={key} onClick={() => handleClick(key)}>
>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
                <ContactItem {...contact} key={key} ></ContactItem>
                </div>
            );
        }
    });     

    return(
            <ol className="list-group" role="tablist">
                {contactsList}
            </ol>
    );
}

export default ContactsListResults