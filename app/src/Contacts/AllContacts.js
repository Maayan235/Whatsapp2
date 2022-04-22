import ContactItem from './ContactItem';
import ContactsData from './ContactsData';
import img1 from './img1.jpg'
import Search from './SearchContact';
import { useState } from 'react';
import ContactsListResults from './ContactsListResult';
import "../styles.css";
import unknownImg from "../Components/unknown.png"
import plusIconImg from "./plusIcon.jpg"
import AddContact from '../AddContact/AddContact';
import MyContacts from './MyContacts';
import UnChosenContacts from "../Contacts/UnChosenContacts";



function AllContacts(loggedInUser) {
    
    const [userImage, setUserImage] = useState(loggedInUser.user.pic);
    console.log(loggedInUser.user.pic);
   // console.log(unknownImg);
   function uploadFiles(){
        document.getElementById("selectFile").click()
   }
    function handleImageChange (event) {

        if (event.target.files && event.target.files[0]) {
            let image = event.target.files[0];
            loggedInUser.user.pic = URL.createObjectURL(image);
            setUserImage(loggedInUser.user.pic);
            
            // console.log(loggedInUser.user.pic)
            // console.log(userImage);
            //refreshPage()
        }
    }
    
    function refreshPage() {
        window.location.reload(false);
      }
    const profilePic = unknownImg == userImage ? <><button  className="picButton" onClick={uploadFiles} ><img src={plusIconImg} className="rounded-circle m-2" width="50" height="50"></img></button>
        <input id="selectFile" type="file" style={{ display: "none" }} onChange={handleImageChange} /></> :  <><button className="picButton" onClick={uploadFiles}><img src={userImage} className="rounded-circle m-2" width="50" height="50"></img></button>
        <input id="selectFile" type="file" style={{ display: "none" }} onChange={handleImageChange}  /></>
    const [contactsList, setContactsList] = useState(ContactsData);

    const doSearch = function (query) {
        setContactsList(ContactsData.filter((contact) => contact.name.includes(query)));
    }

    return (
        <div className="col-3 bg-light border vh-100">
        {profilePic}<span> {loggedInUser.user.name}</span>
            <Search doSearch={doSearch} />
            <ContactsListResults relContacts={contactsList} />
        </div>
    );
}

export default AllContacts