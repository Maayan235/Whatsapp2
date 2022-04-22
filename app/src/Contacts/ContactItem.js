
function ContactItem({name, password, numOfMessages, pic}){
    const handleClick = function(e){
        console.log("clicked");
    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center" onSubmit={handleClick}>
            <div className="ms-2 me-auto">
            <div className="fw-bold"> <img src={pic} className="rounded-circle m-2" width="50" height="50"></img><span>{name}</span></div>
            </div>
            {numOfMessages !== "0" ? <span className="badge bg-primary rounded-pill">{numOfMessages}</span> : <div></div>}
        </li>
    );
}

export default ContactItem