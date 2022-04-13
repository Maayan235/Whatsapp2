import ChosenContact from "./ChosenContact";
import img from'./img1.jpg'

function Chat(){
    return(
        <div className="col-9 vh-100">
            <ChosenContact name="Avital" pic = {img}/>
            <div className="align-items-end ">
                <div>
                    <div className="bg-light border p-2 bd-highlight">bla</div>
                    <div className="bg-light border p-2 bd-highlight ">bla bla</div>
                    <div className="bg-light border p-2 bd-highlight">bla</div>
                </div>
                <div className="position-absolute bottom-0 end-0 w-75">
                    <input type="text" className="w-75"></input>
                    <button type="button" className="btn btn-primary">send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat