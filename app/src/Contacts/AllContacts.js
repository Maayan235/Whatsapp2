import ContactItem from './ContactItem';
import ContactsData from './ContactsData';
import img1 from'./img1.jpg'

function AllContacts(){

    const contactsList = ContactsData.map((contact, key)=>{
        return <ContactItem {...contact} key={key}></ContactItem>
    })     

    return(
        <div className="col-3 bg-light border vh-100">
            <img src={img1} className="rounded-circle m-3" width="50" height="50"></img><span>My Name</span>
            <div><input className="search_contact w-100" type="search" placeholder="Search Contact" ></input></div>
            <ol className="list-group">
                {contactsList}
            </ol>
        </div>
    );
}

export default AllContacts