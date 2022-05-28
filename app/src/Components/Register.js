import "../styles.css";
import NameForm from "../NameForm.js"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { userDetails } from "../index.js";
import ContactsData from "../Contacts/ContactsData";
//import unknownImg from "./unknown.png"


var flagList = { "id": false, "password": false, "cnfPassword":false, "name": false };
export{flagList}
export default function Register() {

    async function SignUser(userDetails){
        const res = await fetch("http://localhost:5286/api/getUser/" + userDetails.id);
        const data = await res.json();
        if(data.id != userDetails.id){
            //if (!userData) {
                setErrorMessage("sucsses!");  
                postUser(userDetails);
        }else {
            setErrorMessage("Username already exist");
        }
    }
    async function postUser(userDetails){
        const res = await fetch("http://localhost:5286/api",{
        
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({id : userDetails.id, Password: userDetails.password, name: userDetails.name, ProfilePicSrc: userDetails.profilePicSrc })});  
                
                
                ContactsData.push({ name: userDetails.id, password: userDetails.password, numOfMessages: "0",name: userDetails.name, pic: userDetails.profilePicSrc, messages:[], myContactList: []});
      
    }

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        if(!(flagList.name && flagList.password && flagList.id && flagList.cnfPassword)){
            setErrorMessage("Note error comments please")
            return;
        }

            SignUser(userDetails);
        
    };
    
    const loginLink = errorMessage === "sucsses!"? <Link className="nav-link" to={"/"}> Login Now!</Link> : <div></div>

    return (
        <div>
            <h3 className="title"> Register </h3>
            
                <NameForm formType={"Username: "}  />
            
                <NameForm formType={"New password: "}  />
           
                <NameForm formType={"Password confirmation: "}  />

                <NameForm formType={"Display Name: "}  />
            
            <div className="regButton">
                <button className="btn btn-primary btn-block" onClick={handleSubmit}>
                    register
                </button>
            </div>
            <div>
            </div>

            <div>
               <span>{errorMessage}{loginLink}</span> 
            </div>
            <div className="regButton">
            </div>
        </div>
    );
}