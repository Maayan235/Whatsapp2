import { useState } from 'react';
import "../styles.css"
import UnChosenContacts from './UnChosenContacts';
import video from './videoIcon.jpg'
import picture from './pictureIcon.png'
import audio from './audioIcon.png'


function ContactItem({ item, setChatMember}) {
    let userData = item;
    
    let isAddedUsser = false;
    if (!userData) {
        userData = UnChosenContacts.find((user) => user.name === item.name);
        isAddedUsser = true;
    }

    const [lastMassage, setStream] = useState({
        access: false,
        recorder: null,
        error: ""
    });
    let lastMessage1 = null;
    lastMessage1 = <div> 555</div>

    function handleClick() {
        setChatMember(item);
        console.log(item);
      }
    {console.log(userData.messages)}
    if (userData.messages.length !== 0) {
        if (userData.messages[userData.messages.length - 1].type == "Text") {
            lastMessage1 = <div><div className='overflow'>{userData.messages[userData.messages.length - 1].context.message}</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
        else if (userData.messages[userData.messages.length - 1].type == "Image") {
            lastMessage1 = <div><div className='overflow'><img height="20" src={picture}></img> Photo</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
        else if (userData.messages[userData.messages.length - 1].type == "Video") {
            lastMessage1 = <div><div className='overflow'><img height="20" src={video}></img> Video</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }else{
            lastMessage1 = <div><div className='overflow'><img height="25" src={audio}></img> Audio</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
    }
    return (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={handleClick}>
            <div>
                <div className='w-100 mb-1'>
                    <img src={item.pic} className="rounded-circle m-2" width="50" height="50"></img>
                    <span className='ms-3'>{item.nickName}</span>
                </div>
                <div className="fw-bold text-secondary">
                    {userData.messages.length !== 0 ?
                        <div>{lastMessage1} </div> : <span className='float-right'></span>
                    }
                </div>
            </div>

            {item.numOfMessages !== "0" ? <span className="badge bg-dark rounded-pill">{item.numOfMessages}</span> : <div></div>}

        </li>
    );
}

export default ContactItem