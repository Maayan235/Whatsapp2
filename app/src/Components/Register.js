import "../styles.css";
import NameForm from "../NameForm.js"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { userDetails } from "../index.js";
import ContactsData from "../Contacts/ContactsData";
import unknownImg from "./unknown.png"


var flagList = { "userName": false, "password": false, "cnfPassword":false, "nickName": false };
export{flagList}
export default function Register() {

    async function SignUser(userDetails){
        const res = await fetch("http://localhost:5286/api/UsersAPI/" + userDetails.userName);
        console.log(res);
        const data = await res.json();
        console.log(data);
        if(data.UserName != userDetails.userName){
            //if (!userData) {
                setErrorMessage("sucsses!");
                postUser(userDetails);       
        }else {
            setErrorMessage("username already exist");
        }
    }
    async function postUser(userDetails){
        const res = await fetch("http://localhost:5286/api/UsersAPI",{
        
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({UserName : userDetails.userName, Password: userDetails.password, NickName: userDetails.nickName,ProfilePic: unknownImg})});  
                console.log(res);
                
                
                ContactsData.push({ name: userDetails.userName, password: userDetails.password, numOfMessages: "0",nickName: userDetails.nickName, pic: unknownImg, messages:[], myContactList: []});
      
    }
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        if(!(flagList.nickName && flagList.password && flagList.userName && flagList.cnfPassword)){
            setErrorMessage("Note error comments please")
            return;
        }
        // // Find user login info
        // const res = await fetch("http://localhost:5286/api/UsersAPI/" + userDetails.userName);
        // //const data = await res.json;
        // //const userData = ContactsData.find((user) => user.name === userDetails.userName);
        // // Compare user info

        // if(res == null){
        // //if (!userData) {
        //     setErrorMessage("sucsses!");
        //     const res = await fetch("http://localhost:5286/api/UsersAPI/",{
        //         method : 'POST',
        //         body: JSON.stringify({UserName : userDetails.userName, Password: userDetails.password, NickName: userDetails.nickName})});

            SignUser(userDetails);
        //     console.log(res);
        //     ContactsData.push({ name: userDetails.userName, password: userDetails.password, numOfMessages: "0",nickName: userDetails.nickName, pic: unknownImg, messages:[], myContactList: []});
        // }
        // else {
        //     setErrorMessage("username already exist");
        // }
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