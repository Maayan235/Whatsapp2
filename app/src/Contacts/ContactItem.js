import { useState } from 'react';
import "../styles.css"
import ContactsData from './ContactsData';
import UnChosenContacts from './UnChosenContacts';
function ContactItem({ name, password, numOfMessages, nickName, pic, messages }) {
    let userData = ContactsData.find((user) => user.name === name);
    let isAddedUsser = false;
    if (!userData) {
        userData = UnChosenContacts.find((user) => user.name === name);
        isAddedUsser = true;
    }
    //console.log(userData)


    //console.log(userData.messages[messages.length - 1].context.message)
    const [lastMassage, setStream] = useState({
        access: false,
        recorder: null,
        error: ""
    });
    let lastMessage1 = null;
    lastMessage1 = <div> 555</div>

    console.log(userData.messages)


    if (userData.messages.length !== 0) {
        if (userData.messages[userData.messages.length - 1].type == "Text") {
            lastMessage1 = <div><div className='overflow'>{userData.messages[userData.messages.length - 1].context.message}</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
        else if (userData.messages[userData.messages.length - 1].type == "Image") {
            lastMessage1 = <div><div className='overflow'>image...</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
        else if (userData.messages[userData.messages.length - 1].type == "Video") {
            lastMessage1 = <div><div className='overflow'>video...</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
    }
    return (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div>
                <div className='w-100 mb-1'>
                    <img src={pic} className="rounded-circle m-2" width="50" height="50"></img>
                    <span className='ms-3'>{nickName}</span>
                </div>
                <div className="fw-bold text-secondary">
                    {userData.messages.length !== 0 ?
                        <div>{lastMessage1} </div> : <span className='float-right'></span>
                    }
                </div>
            </div>


            {numOfMessages !== "0" ? <span className="badge bg-dark rounded-pill">{numOfMessages}</span> : <div></div>}


        </li>
    );
}

export default ContactItem