
function ContactItem({name, numOfMessages, pic}){
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="ms-2 me-auto">
            <div className="fw-bold"> <img src={pic} className="rounded-circle m-2" width="50" height="50"></img><span>{name}</span></div>
            </div>
            <span className="badge bg-primary rounded-pill">{numOfMessages}</span>
        </li>
    );
}

export default ContactItem