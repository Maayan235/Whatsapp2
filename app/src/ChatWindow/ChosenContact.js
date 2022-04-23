function ChosenContact({name, pic}){
    return(
        <div id="contant_info" className="border border-start-0 border-5 bg-light">
            <img src={pic} className="rounded-circle m-3"  width="50" height="50"></img>
            {name}
        </div>
    );
}

export default ChosenContact