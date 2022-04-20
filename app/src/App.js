import './App.css';
import React, { Component } from "react";
import AllContacts from './Contacts/AllContacts';
import Chat from './ChatWindow/Chat';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Database from './Database';


class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted : false
    };
    this.setIsSubmitted = this.setIsSubmitted.bind(this);
    this.setUserDetails = this.setUserDetails.bind(this);
    this.loggedInUser=null;
  }

  setUserDetails(user){
    this.loggedInUser = user;
  }
  setIsSubmitted(bool) {
    this.setState({
      isSubmitted : bool
    }
    );
  }

  render() {
    // JSX code for chat window
    const renderChat = (
      <div className="container-fluid h-100">
        <div className="row">
            <AllContacts user= {this.loggedInUser}/>
            <Chat setIsSubmitted={this.setIsSubmitted}/>
        </div>
      </div>
  );

    // JSX code for login form
    const renderLogin = (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
          <Switch>
          <Route path="/Database" component={Database}/>
          <Route path="/Register" component={Register}/>
          <Route exact path='/' component={Login}>
            <Login isSubmitted={this.state.isSubmitted} onSubmit={this.setIsSubmitted} setUserDetails = {this.setUserDetails}/>
          </Route>
          <Route path="/Login" component={Login}/>
            <Login isSubmitted={this.state.isSubmitted} onSubmit={this.setIsSubmitted}/>

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

