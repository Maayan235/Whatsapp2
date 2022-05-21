import ContactsData from './ContactsData';
import Search from './SearchContact';
import { useState } from 'react';
import ContactsListResults from './ContactsListResult';
import "../styles.css";
import unknownImg from "../Components/unknown.png"
import plusIconImg from "./plusIcon.png"
import AddContact from '../AddContact/AddContact';
import { useEffect} from 'react';

function AllContacts({ user, setChatMember, logout, chosenChatMember}) {

    console.log(user)
    const [contactsList,setContactsList]= useState([]);
    const [showContactsList, setShowContactsList] = useState([]); //userContactsList);


    //useAffect
    //async function getContacts(){
    useEffect(async ()=> {
        const contacts = await fetch("http://localhost:5286/api/UsersAPI/contacts");
        console.log(contacts);
        var contactsData = await contacts.json();
        console.log(contactsData)
        setContactsList(contactsData);
        
        setShowContactsList(contactsData);
        //return contactsData;
    },[]);


    //const userData = ContactsData.find((user1) => user1.name === user.name);
    //const userContactsList = getContacts(); //ContactsData.filter(user1 => (userData.myContactList.indexOf(user1.name) > -1));
    //const userContactsListToAdd = ContactsData.filter(user1 => (userData.myContactList.indexOf(user1.name) <= -1));

    //const [contactsList, setContactsList] = useState(userContactsList);
    //const [contactsListToAdd, setContactsListToAdd] = useState(userContactsListToAdd);

    const doSearch = function (query) {
        setShowContactsList(contactsList.filter((contact) => contact.name.includes(query)))
    }

    const addContact = function (item) {
        setContactsList(state => [...state, item]);
        setShowContactsList(state => [...state, item]);
        //setContactsListToAdd(contactsListToAdd.filter(list => list.name !== item.name));
        //userData.myContactList.push(item.name);
        
        //post(!)
   
    }

    const [userImage, setUserImage] = useState(user.profilePicSrc);
  
    function uploadFiles() {
        document.getElementById("selectFile").click()
    }
    function handleImageChange(event) {

        if (event.target.files && event.target.files[0]) {
            let image = event.target.files[0];
            user.profilePicSrc = URL.createObjectURL(image);
            setUserImage(user.profilePicSrc);
        }
    }

    const changeChat = (key) => setChatMember(key);

    const profilePic = unknownImg === userImage ? (<div><button className="picButton" onClick={uploadFiles} ><img src={plusIconImg} className="rounded-circle m-2" width="50" height="50" alt={""}></img></button>
        <input id="selectFile" type="file" style={{ display: "none" }} onChange={handleImageChange} /></div>) : (<div><button className="picButton" onClick={uploadFiles}><img src={userImage} className="rounded-circle m-2" width="50" height="50" alt={""}></img></button>
            <input id="selectFile" type="file" style={{ display: "none" }} onChange={handleImageChange} /></div>)
            
    return (
        <div className="col-3 bg-light border border-5 vh-100 position-relative">
            <div className='d-flex align-items-center p-3'>
                <span>{profilePic}</span><span id='userName'>{user.nickName}</span>
            </div>
            <button type="button" className="btn btn-outline-dark position-absolute bottom-0 start-0 m-2" onClick={logout}>logout</button>
            <Search doSearch={doSearch} />
            <ContactsListResults relContacts={showContactsList} username={user.userName} setChatMember={changeChat} chosenChatMember={chosenChatMember}/>
            <AddContact username={user.userName} addContact={addContact}  className="popUp" userData={user}/>
        </div>

    );
}

export default AllContacts



