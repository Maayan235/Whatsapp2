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
            render: false,
        };
        this.setChat = this.setChat.bind(this);
        this.chatChanged = React.createRef();
        this.logout = this.logout.bind(this);
        this.renderAllContacts= this.renderAllContacts.bind(this);
    }

    setChat = (chatMember) => {
        this.setState({
            isChosedChat: true,
            chosenChatMember: chatMember,
        }
        );
        this.state.chosenChatMember.numOfMessages = "0";
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
                <ChosenContact name={this.state.chosenChatMember.name} nickName={this.state.chosenChatMember.nickName} pic={this.state.chosenChatMember.pic} messeges={this.state.chosenChatMember.messeges} />
                <div className="align-items-end ">
                    <ChatApp username={this.state.conectedUser.name} chosenChatMember={this.state.chosenChatMember} ref={this.chatChanged} renderAllContacts={this.renderAllContacts} />
                </div>
            </div>
        );

        // JSX code for chat window
        const renderHello = (
            <div className="col-9 vh-100 p-0">
                <h3>React Chat App</h3>
                <h3>Hi {this.state.conectedUser.userName}! You Can Start Chatting Now!</h3>
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
