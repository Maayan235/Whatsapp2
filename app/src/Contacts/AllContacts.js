import ContactItem from './ContactItem';
import ContactsData from './ContactsData';
import Search from './SearchContact';
import { useState } from 'react';
import ContactsListResults from './ContactsListResult';
import "../styles.css";
import unknownImg from "../Components/unknown.png"
import plusIconImg from "./plusIcon.jpg"
import AddContact from '../AddContact/AddContact';
import MyContacts from './MyContacts';
import UnChosenContacts from "../Contacts/UnChosenContacts";
import ContactsDataStartPoint from "./ContactsDataStartPoint"



// function AllContacts(loggedInUser) {
//     const userData = ContactsData.find((user) => user.name === uname.value);

//     const [userImage, setUserImage] = useState(loggedInUser.user.pic);
//     console.log(loggedInUser.user.pic);
//    // console.log(unknownImg);
//    function uploadFiles(){
//         document.getElementById("selectFile").click()
//    }
//     function handleImageChange (event) {

//         if (event.target.files && event.target.files[0]) {
//             let image = event.target.files[0];
//             loggedInUser.user.pic = URL.createObjectURL(image);
//             setUserImage(loggedInUser.user.pic);

//             // console.log(loggedInUser.user.pic)
//             // console.log(userImage);
//             //refreshPage()
//         }
//     }

//     function refreshPage() {
//         window.location.reload(false);
//       }
//     
//     const [contactsList, setContactsList] = useState(ContactsData);

//     const doSearch = function (query) {
//         setContactsList(ContactsData.filter((contact) => contact.name.includes(query)));
//     }

//     return (
//         <div className="col-3 bg-light border vh-100">
//         {profilePic}<span> {loggedInUser.user.name}</span>
//             <Search doSearch={doSearch} />
//             <ContactsListResults relContacts={contactsList} />
//         </div>
//     );
// }


function AllContacts({ username, setChatMember, logout }) {
    const [contactsList, setContactsList] = useState(ContactsDataStartPoint);
    const userData = ContactsData.find((user) => user.name === username);

    // const [contactsList, setContactsList] = useState(MyContacts);
    const [contactsListToAdd, setContactsListToAdd] = useState(UnChosenContacts);
    const [showContactsList, setShowContactsList] = useState(ContactsDataStartPoint);

    const doSearch = function (query) {
        setContactsList(showContactsList.filter((contact) => contact.name.includes(query)))
    }

    const addContact = function (item) {
        ContactsData.push(item);
        setContactsList(state => [...state, item]);
        setShowContactsList(state => [...state, item]);
        setContactsListToAdd(contactsListToAdd.filter(list => list !== item));
    }

    const [userImage, setUserImage] = useState(userData.pic);
    //    
    function uploadFiles() {
        document.getElementById("selectFile").click()
    }
    function handleImageChange(event) {

        if (event.target.files && event.target.files[0]) {
            let image = event.target.files[0];
            userData.pic = URL.createObjectURL(image);
            setUserImage(userData.pic);

            //             // console.log(loggedInUser.user.pic)
            //             // console.log(userImage);
            //             //refreshPage()
            //         }
        }
    }

    // const doSearch = function (query) {
    //     setContactsList(ContactsData.filter((contact) => contact.name.includes(query)));
    // }

    const changeChat = (key) => setChatMember(key);
    const profilePic = unknownImg === userImage ? (<div><button className="picButton" onClick={uploadFiles} ><img src={plusIconImg} className="rounded-circle m-2" width="50" height="50"></img></button>
        <input id="selectFile" type="file" style={{ display: "none" }} onChange={handleImageChange} /></div>) : (<div><button className="picButton" onClick={uploadFiles}><img src={userImage} className="rounded-circle m-2" width="50" height="50"></img></button>
            <input id="selectFile" type="file" style={{ display: "none" }} onChange={handleImageChange} /></div>)


    return (
        <div className="col-3 bg-light border border-5 vh-100 position-relative">
            {profilePic}<span>{userData.nickName}</span>
            <button type="button" className="btn btn-outline-dark position-absolute bottom-0 start-0 m-3" onClick={logout}>logout</button>
            <Search doSearch={doSearch} />
            <ContactsListResults relContacts={contactsList} username={username} setChatMember={changeChat} />
            <AddContact username={username} addContact={addContact} ContactsToAdd={contactsListToAdd} className="popUp" />
        </div>
    );
}

export default AllContacts


