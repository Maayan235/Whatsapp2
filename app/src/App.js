import React, { Component } from "react";
import Chat from './ChatWindow/Chat';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Database from './Database';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      user: "",
      connection: null
    };
    this.setIsSubmitted = this.setIsSubmitted.bind(this);
    this.setUser = this.setUser.bind(this);
    this.signToPushMessages = this.signToPushMessages.bind(this);
    this.closeConnection = this.closeConnection.bind(this);
  }

  setIsSubmitted = (bool) => {
    this.setState({
      isSubmitted: bool
    });
  }

  setUser = (userdata) => {
    this.setState({
      user: userdata
    });
    this.signToPushMessages(userdata.id);
  }

  async signToPushMessages(myId) {
    // if(this.state.connectionSetAlready){
    //   this.closeConnection()
    // }
    var myConnection = new HubConnectionBuilder()
    .withUrl("http://localhost:5286/chat")
    .configureLogging(LogLevel.Information)
    .build();

    myConnection.on("ReceiveMessage", (message) => {
      console.log("GOT IT");
    //this.getChat(this.chosenChatMember);
   //this.addMessage(false, message)
 });

 console.log("myconnection:", myConnection);
 this.setState({
     connection: myConnection,
     //connectionSetAlready: true
 })
  await myConnection.start();
  await myConnection.invoke("joinToListeners", {"myId":myId});
}

closeConnection = async () => {
    
    try {
      await this.state.connection.stop();
    } catch (e) {
      console.log(e);
    }
  }
  

  render() {
    // JSX code for chat window
    const renderChat = (
      <Router>
        <div className="container-fluid h-100">
          <div className="row">
            <Chat user={this.state.user} setIsSubmitted={this.setIsSubmitted} connection = {this.state.connection} />
          </div>
        </div>
      </Router>
    );

    // JSX code for login form
    const renderLogin = (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>OurWebProject</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Register"}>Register</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={{ pathname: "http://localhost:5253/Ratings/Search" }} target="_blank">App Ratings</Link>
              </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner ">
            <Switch>
              <Route path="/Database" component={Database} />
              <Route path="/Register" component={Register} />
              <Route exact path='/' component={Login}>
                <Login isSubmitted={this.state.isSubmitted} onSubmit={this.setIsSubmitted} setUser={this.setUser} />
              </Route>
              <Route path="/Login" component={Login} />
              <Login isSubmitted={this.state.isSubmitted} onSubmit={this.setIsSubmitted} setUser={this.setUser}/>
            </Switch>
          </div>
        </div>
      </div>
    );

    return (
      <Router>
        {this.state.isSubmitted ? renderChat : renderLogin}
      </Router>
    );
  }
}

export default App;

//       {this.state.isSubmitted ? renderChat1 : renderLogin}
// <div className="container-fluid h-100">
//   <div className="row">
//       <AllContacts />
//       <Chat />
//   </div>
// </div>

// <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<LandingPage/>}></Route>
//         <Route path='/Login/Register' element={<Register />}></Route>
//         <Route path='/Login' element={<Login />}></Route>
//         <Route path='/Database' element={<Database users = {users}/>}></Route>

//       </Routes>
// </BrowserRouter>