import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ChosenContact from "./ChosenContact";
import ContactsData from "../Contacts/ContactsData";
import ChatApp from "./ChatApp";
import AllContacts from "../Contacts/AllContacts";


var data, chosenMember=null;
class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conectedUser: this.props.user,
            chosenChatMember: ContactsData[0],
            isChosedChat: false,
            lastMessage : null,
            chatUsers:[],
            chosenChatMemberNumber: -1,
            chat: null,
            render: false,
        };
        this.setChat = this.setChat.bind(this);
        this.chatChanged = React.createRef();
        this.logout = this.logout.bind(this);
        this.renderChat= this.renderChat.bind(this);
        this.getChat= this.getChat.bind(this);
        this.setLastMessage=this.setLastMessage.bind(this);    
    }

        
        


    setChat = (chatMember) => {
        chatMember.numOfMessages = "0"
        this.setState({
            isChosedChat: true,
            chosenChatMember: chatMember,   
        });
        console.log("chat member:",chatMember)
        this.getChat(chatMember);
        // this.state.chosenChatMember.numOfMessages = "0";
    }
  
      
      
    

    async getChat(Contact){
        
        const res = await fetch("http://localhost:5286/api/contacts/chat/" + Contact.id ,{
                method : 'GET',
                });
                data=await res.json(); 
                if(data){
                    console.log(res)
                    console.log(data);
                    
                    this.setState({
                    chat : data.messages,
                    lastMessage : data.lastMessage,
                    chatUsers: data.contacts,
                    chosenChatMember: Contact,   
                    isChosedChat:true
                    },()=>{
                        
                        //lastMessage = data.lastMessage;
                          console.log( this.state.chatUsers)
                          console.log( this.state.chosenChatMember)

                          
                          
                        //  this.setState({
                        //      render:true,
                        //      isChosedChat:true
                        //  })
                    });

                    
                }
                console.log(res)
                
                // Chats: user.Chats, ProfilePicSrc: user.ProfilePicSrc, server: user.server,Id: user.id, id : user.id, Password: user.password, name: user.name, Contacts:user.contacts
            }

    renderChat(){
        console.log("im in render of chat! !" )
        this.setState({
            render:true
        }); 
    }

    logout() {
        this.props.setIsSubmitted(false);
    }
    setLastMessage(message){
        console.log("last message..", message)
        this.setState({
            lastMessage: message
        })
    }
    render() {
        // JSX code for chat window
        var renderChatWithContact = (
            <div className="col-9 vh-100 p-0">
                <ChosenContact id={this.state.chosenChatMember.id} name={this.state.chosenChatMember.name} pic={this.state.chosenChatMember.pic} messeges={this.state.chosenChatMember.messeges} />
                <div className="align-items-end ">
                    <ChatApp id={this.state.conectedUser.id} chosenChatMember={this.state.chosenChatMember} ref={this.chatChanged} renderChat={this.renderChat} chat={this.state.chat==null? null:this.state.chat}/>
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
                <AllContacts user={this.state.conectedUser} setChatMember={this.setChat} logout={this.logout} chosenChatMember={this.state.chosenChatMember} lastMessage = {this.state.lastMessage}/>
                { this.state.chat!==null && this.state.chatUsers.indexOf(this.state.chosenChatMember.id) !== -1 ? <div className="col-9 vh-100 p-0">
                <ChosenContact id={this.state.chosenChatMember.id} name={this.state.chosenChatMember.name} pic={this.state.chosenChatMember.pic} messeges={this.state.chosenChatMember.messeges} />
                <div className="align-items-end ">
                    <ChatApp id={this.state.conectedUser.id} chosenChatMember={this.state.chosenChatMember} setChat={this.setChat} renderChat={this.renderChat} chat={this.state.chat} setLastMessage ={this.setLastMessage} />
                </div>
            </div> : renderHello}
            </Router>
        );
    }
}
export default Chat;
