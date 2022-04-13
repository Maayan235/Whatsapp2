function ChosenContact({name, pic}){
    return(
        <div id="contant_info" className="border border-5">
            <img src={pic} className="rounded-circle"  width="50" height="50" me-30></img>
            {name}
        </div>
    );
}

export default ChosenContact