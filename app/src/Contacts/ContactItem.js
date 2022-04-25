import {useState} from 'react';

function ContactItem({name, password, numOfMessages, pic, messeges}){


    return(
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div>
            <div className="fw-bold"> <img src={pic} className="rounded-circle m-2" width="50" height="50"></img><span>{name}</span></div>
            </div>
            {numOfMessages !== "0" ? <span className="badge bg-dark rounded-pill">{numOfMessages}</span> : <div></div>}
        </li>
    );
}

export default ContactItem