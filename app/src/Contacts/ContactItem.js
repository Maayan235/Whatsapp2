import "../styles.css"
import ContactsData from "./ContactsData"
import video from './videoIcon.jpg'
import picture from './pictureIcon.png'
import audio from './audioIcon.png'


function ContactItem({ item, setChatMember}) {
    let userData = item;
    
    if (!userData) {
        userData = ContactsData.find((user) => user.userName === item.name);
    }

    let lastMessage = null;

    function handleClick() {
        setChatMember(item);
      }
    if (userData.messages.length !== 0) {
        if (userData.messages[userData.messages.length - 1].type === "Text") {
            lastMessage = <div><div className='overflow'>{userData.messages[userData.messages.length - 1].context.message}</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
        else if (userData.messages[userData.messages.length - 1].type === "Image") {
            lastMessage = <div><div className='overflow'><img height="20" src={picture} alt={""}></img> Photo</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
        else if (userData.messages[userData.messages.length - 1].type === "Video") {
            lastMessage = <div><div className='overflow'><img height="20" src={video} alt={"Video"}></img> Video</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }else{
            lastMessage = <div><div className='overflow'><img height="25" src={audio} alt={"Audio"}></img> Audio</div>
                <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
        }
    }
    return (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={handleClick}>
            <div>
                <div className='w-100 mb-1'>
                    <img src={item.pic} className="rounded-circle m-2" width="50" height="50" alt={""}></img>
                    <span className='ms-3'>{item.nickName}</span>
                </div>
                <div className="fw-bold text-secondary">
                    {userData.messages.length !== 0 ?
                        <div>{lastMessage} </div> : <span className='float-right'></span>
                    }
                </div>
            </div>

            {item.numOfMessages !== "0" ? <span className="badge bg-dark rounded-pill">{item.numOfMessages}</span> : <div></div>}

        </li>
    );
}

export default ContactItem