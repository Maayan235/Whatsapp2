import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ChosenContact from "./ChosenContact";
import DisplayImage from "./DisplayImage";
import VideoInput from "./VideoInput";
import ContactsData from "../Contacts/ContactsData";
import ChatApp from "./ChatApp";
import AllContacts from "../Contacts/AllContacts";
import { userDetails } from "..";
import NameForm from "../NameForm";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conectedUser: this.props.user,
            chosenChatMember: ContactsData[0],
            isChosedChat: false,
            chosenChatMemberNumber: -1,
        };
        this.setChat = this.setChat.bind(this);
        this.chatChanged = React.createRef();
        this.logout = this.logout.bind(this);
    }

    setChat = (chatMember) => {
        this.setState({
            isChosedChat: true,
            chosenChatMember: ContactsData[chatMember],
            chosenChatMemberNumber: chatMember
        }
        );
        this.state.chosenChatMember.numOfMessages = "0";
    }

    logout() {
        this.props.setIsSubmitted(false);
    }

    render() {

        // JSX code for chat window
        const renderChatWithContact = (
            <div className="col-9 vh-100">
                <ChosenContact name={this.state.chosenChatMember.name} pic={this.state.chosenChatMember.pic} messeges={this.state.chosenChatMember.messeges} />
                <div className="align-items-end ">
                    <ChatApp username={this.state.conectedUser} chosenChatMember={this.state.chosenChatMemberNumber} ref={this.chatChanged} />
                </div>
            </div>
        );

        // JSX code for chat window
        const renderHello = (
            <div className="col-9 vh-100">
                <h3>React Chat App</h3>
                <h3>Hi {this.state.conectedUser}! You have new messages!
                </h3>
            </div>
        );

        return (
            <Router>
                <AllContacts username={this.state.conectedUser} setChatMember={this.setChat} logout={this.logout} />
                {this.state.isChosedChat ? renderChatWithContact : renderHello }
            </Router>
        );
    }
}
export default Chat;
