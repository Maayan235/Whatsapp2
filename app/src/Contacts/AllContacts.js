import ContactsData from './ContactsData';
import Search from './SearchContact';
import { useState } from 'react';
import ContactsListResults from './ContactsListResult';
import "../styles.css";
import unknownImg from "../Components/unknown.png"
import plusIconImg from "./plusIcon.png"
import AddContact from '../AddContact/AddContact';
import { useEffect} from 'react';

function AllContacts({ user, setChatMember, logout, chosenChatMember, lastMessage, lastList}) {
    console.log("last..." + lastMessage)
    var contactsData = null;
    const [doUseEffect,setDoUseEffect] = useState({value: 0, id : -2});
    console.log(doUseEffect);
     if(doUseEffect!==null && doUseEffect != undefined&& lastMessage != null){
         //if(lastMessage.id != doUseEffect.id){
        // console.log("yay im in!")
        // setDoUseEffect({value:1, id: lastMessage.id});
        // }
    }
    
    const [contactsList,setContactsList]= useState([]);
    const [showContactsList, setShowContactsList] = useState([]); //userContactsList);
   console.log("allcontacts...")
    //useAffect
    //async function getContacts(){
    useEffect(async ()=> {
        const contacts = await fetch("http://localhost:5286/api/contacts" ,{
    
            method : 'GET' })
        console.log(contacts);
        contactsData = await contacts.json();
        console.log(contactsData)
        
        setContactsList(contactsData);
        //console.log(contactsList)
        setShowContactsList(contactsData);
        //return contactsData;
    },[doUseEffect.value]);
    

    
    
    
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
    const removeContact = function (contact) {
        setShowContactsList(showContactsList.filter(item => item.id !== contact.id));
        setContactsList(contactsList.filter(item => item.id !== contact.id));
        };

    const editContact = function(contact){
       removeContact(contact);
       addContact(contact);
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
                <span>{profilePic}</span><span id='id'>{user.name}</span>
            </div>
            <button type="button" className="btn btn-outline-dark position-absolute bottom-0 start-0 m-2" onClick={logout}>logout</button>
            <Search doSearch={doSearch} />
            <ContactsListResults relContacts={showContactsList} removeItem={removeContact} lastList={lastList} id={user.id} setChatMember={changeChat} chosenChatMember={chosenChatMember} lastMessage={lastMessage}/>
            <AddContact id={user.id} addContact={addContact} removeItem={removeContact} editContact={editContact} relContacts={contactsList}  className="popUp" userData={user}/>
        </div>
        

    );
}

export default AllContacts



