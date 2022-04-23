import {useState} from 'react';

function ContactItem({name, password, numOfMessages, pic}){
<<<<<<< HEAD

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="ms-2 me-auto">
            <div className="fw-bold"> <img src={pic} className="rounded-circle m-2" width="50" height="50"></img><span>{name}</span></div>
            </div>
            {numOfMessages !== "0" ? <span className="badge bg-primary rounded-pill">{numOfMessages}</span> : <div></div>}
=======


    return(
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div>
            <div className="fw-bold"> <img src={pic} className="rounded-circle m-2" width="50" height="50"></img><span>{name}</span></div>
            </div>
            {numOfMessages !== "0" ? <span className="badge bg-dark rounded-pill">{numOfMessages}</span> : <div></div>}
>>>>>>> 9cd9b95c117dd77944ebbf9e60a5e16da1bf746d
        </li>
    );
}

export default ContactItem