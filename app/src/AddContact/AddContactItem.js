function AddContactItem({item, addContact, removeAdd}) {

    function handleClick(e) {
       
        addContact(item);
        removeAdd();
      }

    return (
        <div>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={handleClick}>
                <div className="fw-bold" >
                    <img src={item.pic} className="rounded-circle m-2" width="50" height="50" alt={""}></img>
                    <span>{item.name}</span>
                </div>
            </li>
        </div>
    );
}

export default AddContactItem;