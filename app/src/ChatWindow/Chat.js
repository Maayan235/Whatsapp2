import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ChosenContact from "./ChosenContact";
import ContactsData from "../Contacts/ContactsData";
import ChatApp from "./ChatApp";
import AllContacts from "../Contacts/AllContacts";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conectedUser: this.props.user,
            chosenChatMember: ContactsData[0],
            isChosedChat: false,
            chosenChatMemberNumber: -1,
            chat: null,
            render: false,
        };
        this.setChat = this.setChat.bind(this);
        this.chatChanged = React.createRef();
        this.logout = this.logout.bind(this);
        this.renderAllContacts= this.renderAllContacts.bind(this);
        this.getChat= this.getChat.bind(this);
    }

        
        


    setChat = (chatMember) => {
        this.setState({
            isChosedChat: true,
            chosenChatMember: chatMember,   
        });
        
        this.getChat(chatMember);
        this.state.chosenChatMember.numOfMessages = "0";
    }

    async getChat(Contact){
        
        const res = await fetch("http://localhost:5286/api/messages/" + Contact.id,{
                method : 'GET',
                });
                const data=await res.json(); 
                if(data){
                    console.log(data);
                    
                    this.setState({
                    chat : data
                    },()=>{
                        console.log(this.state.chat)
                        this.setState({
                            render:true
                        })
                    });

                    
                }
                console.log(res)
                
                // Chats: user.Chats, ProfilePicSrc: user.ProfilePicSrc, server: user.server,Id: user.id, id : user.id, Password: user.password, name: user.name, Contacts:user.contacts
            }

    renderAllContacts(){
        this.setState({
            render:true
        }); 
    }

    logout() {
        this.props.setIsSubmitted(false);
    }

    render() {
        // JSX code for chat window
        const renderChatWithContact = (
            <div className="col-9 vh-100 p-0">
                <ChosenContact id={this.state.chosenChatMember.id} name={this.state.chosenChatMember.name} pic={this.state.chosenChatMember.pic} messeges={this.state.chosenChatMember.messeges} />
                <div className="align-items-end ">
                    <ChatApp Id={this.state.conectedUser.id} chosenChatMember={this.state.chosenChatMember} ref={this.chatChanged} renderAllContacts={this.renderAllContacts} chat={this.state.chat}/>
                </div>
            </div>
        );

        // JSX code for chat window
        const renderHello = (
            
            <div className="col-9 vh-100 p-0">
                <h3>React Chat App</h3>
                <h3>Hi {this.state.conectedUser.id}! You Can Start Chatting Now!</h3>
            </div>
        );

        return (
            <Router>
                <AllContacts user={this.state.conectedUser} setChatMember={this.setChat} logout={this.logout} chosenChatMember={this.state.chosenChatMember}/>
                {this.state.isChosedChat ? renderChatWithContact : renderHello }
            </Router>
        );
    }
}
export default Chat;
