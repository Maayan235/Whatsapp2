import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ChosenContact from "./ChosenContact";
import ContactsData from "../Contacts/ContactsData";
import ChatApp from "./ChatApp";
import AllContacts from "../Contacts/AllContacts";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

var data, chosenMember=null;
class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conectedUser: this.props.user,
            chosenChatMember: ContactsData[0],
            isChosedChat: false,
            lastMessage : null,
            connectionSetAlready: false,
            chatUsers:[],
            chosenChatMemberNumber: -1,
            lastList: [],
            chat: null,
            render: false,
            connection: null
        };
        this.setChat = this.setChat.bind(this);
        this.chatChanged = React.createRef();
        this.logout = this.logout.bind(this);
        this.renderChat= this.renderChat.bind(this);
        this.getChat= this.getChat.bind(this);
        this.setLastMessage=this.setLastMessage.bind(this);    
    }



    async signToPushMessages(myId, contactId) {
        var connection;
        if(this.state.connectionSetAlready){
          this.closeConnection()
        }
      connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5286/chat")
        .configureLogging(LogLevel.Information)
        .build();
  
      connection.on("ReceiveMessage", (message) => {

       //this.addMessage(false, message)
     });
  
      await connection.start();
      await connection.invoke("joinToListeners", {myId, contactId});
this.setState({
    connection: connection
})
    }

    closeConnection = async () => {
        
        try {
          await this.state.connection.stop();
        } catch (e) {
          console.log(e);
        }
      }
      
      


    async  pushMessage(content) {
        // var connection = new HubConnectionBuilder()
        //   .withUrl("https://localhost:5286/chat")
        //   .configureLogging(LogLevel.Information)
        //   .build();
 
        await this.state.connection.start();
        await this.state.connection.invoke("SendMessage", content);
 
      }
      


    setChat = (chatMember) => {
        chatMember.numOfMessages = "0"
        this.setState({
            isChosedChat: true,
            chosenChatMember: chatMember,   
        });
        console.log("chat member:",chatMember)
        
        this.signToPushMessages(this.state.conectedUser.id, chatMember.id)
        this.getChat(chatMember);
        
        // this.state.chosenChatMember.numOfMessages = "0";

    }

    handleNewMessage(id, text){
        if(id == this.state.conectedUser.id){ 
            this.pushMessage(text);
            
        }
        this.setState({
            render:true
        }); 

    }
  
      
      
    

    async getChat(Contact){
        
        const res = await fetch("http://localhost:5286/api/contacts/chat/" + Contact.id ,{
                method : 'GET',
                });
                data=await res.json(); 
                if(data){
                    console.log(res)
                    console.log(data);
                    var lastList1 = this.state.lastList;
                    if(data.lastMessage !=null){
                    lastList1[data.lastMessage.to] = {last: data.lastMessage.content, time: data.lastMessage.time}
                    }
                    this.setState({
                    chat : data.messages,
                    lastMessage : data.lastMessage,
                    lastList: lastList1,
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
                    <ChatApp handleNewMessage={this.state.handleNewMessage} id={this.state.conectedUser.id} chosenChatMember={this.state.chosenChatMember} ref={this.chatChanged} renderChat={this.renderChat} chat={this.state.chat==null? null:this.state.chat}/>
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
                <AllContacts user={this.state.conectedUser} setChatMember={this.setChat} logout={this.logout} lastList={this.state.lastList} chosenChatMember={this.state.chosenChatMember} lastMessage = {this.state.lastMessage}/>
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
