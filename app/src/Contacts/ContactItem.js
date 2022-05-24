import "../styles.css"
import CloseButton from '../AddContact/CloseButton';
import ContactsData from "./ContactsData"
import video from './videoIcon.jpg'
import picture from './pictureIcon.png'
import audio from './audioIcon.png'
import React, { useState,  useCallback } from "react";
import unknownImg from "../Components/unknown.png"

function ContactItem({ item,contacts, removeItem, setChatMember, contactList, editItem, lastMessage}) {
    let userData = item;

  console.log(lastMessage)
    const [editVar, setEditVar] = useState(<div></div>);
    // if (!userData) {
    //     userData = ContactsData.find((user) => user.id === item.name);
    // }

    //let lastMessage = null;

    const mystyle = {
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        background: "#FFF",
        "z-index": "200",
        "box-shadow": "#000 0 2px 18px"
      };



    function handleClick() {
        if(setChatMember!= undefined){
        setChatMember(item);
      }
    }

      function delContact(){
        deleteContact(item.id);
      }

      const handleSubmit = useCallback(event => {
        // Prevent page reload
        event.preventDefault();
    
        var { name, server} = document.forms[0];
    
        var contact = {id: item.id, server: server.value, name: name.value }
        //console.log("form details:")
        console.log(contact);
        
          edit(item.id , name.value, server.value  );
          editItem(contact)
    })
      
    async function deleteContact (id){
    
        const res = await fetch("http://localhost:5286/api/contacts/" + id,{
        
                method : 'DELETE', });  
                console.log(res);
                removeItem(item)
    }


    

    const [isOpen, setIsOpen] = useState(false);

    async function edit (id,newName, newServer){
    
        const res = await fetch("http://localhost:5286/api/contacts/" + id,{
        
                method : 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({name:newName, server: newServer })});
                
                console.log(res);
                //editContact(editItem)
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
        editContact();
      }

    function editContact(){
        console.log("here in edit !")
        setEditVar(  <div style={mystyle}>
    
{isOpen && <CloseButton 
  content={
    <div>
    <form>
    <h3>edit contact</h3>
    <div className="form-group">
        <label>Name</label>
        <input  className="form-control" placeholder="name" name="name" required/>
        
    </div>
    <p></p> 
    <div className="form-group">
        <label>Server</label>
        <input className="form-control" placeholder="server" name="server" required/>
    </div>

    <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
       
       Add
    </button>
    </form>
    </div>
  } handleClose={togglePopup}/>} </div>);

 
//   var { name, server} = document.
//     forms[0];
//   edit(item.id, name.value, server.value )
    }
    var lastMessageprev = <div></div>;
    var action = <div></div>;
if(removeItem!= undefined){
    action =<span> <button onClick={delContact} > del</button></span>    
}
if(editItem != undefined){    
 action = <span><button type="button" className="btn btn-outline-dark position-absolute top-0 end-0 m-3" id="addButton" onClick={togglePopup}>{isOpen ? 'x' : 'edit'}</button></span>

}
    // if (userData.messages.length !== 0) {
    //     if (userData.messages[userData.messages.length - 1].type === "Text") {
             if(lastMessage!=null && lastMessage != undefined){
                lastMessageprev = <div><div className='overflow'>{lastMessage.content}</div>
                 <div className='overflow'>{lastMessage.time} </div> </div>
             }

    //     }
    //     else if (userData.messages[userData.messages.length - 1].type === "Image") {
    //         lastMessage = <div><div className='overflow'><img height="20" src={picture} alt={""}></img> Photo</div>
    //             <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
    //     }
    //     else if (userData.messages[userData.messages.length - 1].type === "Video") {
    //         lastMessage = <div><div className='overflow'><img height="20" src={video} alt={"Video"}></img> Video</div>
    //             <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
    //     }else{
    //         lastMessage = <div><div className='overflow'><img height="25" src={audio} alt={"Audio"}></img> Audio</div>
    //             <div className='overflow'>{userData.messages[userData.messages.length - 1].context.time} </div> </div>
    //     }
    // }
    return (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={handleClick}>
            <div>
                <div className='w-100 mb-1'>
                    <img src={item.profilePicSrc} className="rounded-circle m-2" width="50" height="50" alt={""}></img>
                    <span className='ms-3'>{item.name}</span>
                    
                    {action}
                                   
                    </div>
                    <div>
                    {editVar}
                    </div>
                <div className="fw-bold text-secondary">
                
                    {
                        lastMessage != null ?
                        <div>{lastMessageprev} </div> : <span className='float-right'></span>
                    }
                </div>
            </div>
{
 //           {item.numOfMessages !== "0" ? <span className="badge bg-dark rounded-pill">{item.numOfMessages}</span> : <div></div>}
}
        </li>
    );
}

export default ContactItem