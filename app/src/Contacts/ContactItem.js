import {useState} from 'react';
import "../styles.css"
import ContactsData from './ContactsData';
import UnChosenContacts from './UnChosenContacts';
function ContactItem({name, password, numOfMessages,nickName, pic, messages}){
    const userData = ContactsData.find((user) => user.name === name);
    if(!userData){
        userData=UnChosenContacts.find((user) => user.name === name);
    }
    //console.log(userData)
      
     
     //console.log(userData.messages[messages.length - 1].context.message)
    const [lastMassage, setStream] = useState({
        access: false,
        recorder: null,
        error: ""
      });
      console.log(userData.messages);
      
    return(
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div>
            <div className="fw-bold"> <img src={pic} className="rounded-circle m-2" width="50" height="50"></img>         
            {userData.messages.length !== 0?
                <div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.message}</div>
            <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div> : <div></div>
        }
            </div>      
            </div>
        
            
            <span>{nickName}</span>
            {numOfMessages !== "0" ? <span className="badge bg-dark rounded-pill">{numOfMessages}</span> : <div></div>}
            
            
        </li>
    );
}

export default ContactItem