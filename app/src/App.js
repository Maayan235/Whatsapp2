import './App.css';
import React from "react"
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Register from "./Register";
import Login from './Login';
import LandingPage from './LandingPage';
import Database from './Database';
import { users } from './index';
import AllContacts from './Contacts/AllContacts';
import Chat from './ChatWindow/Chat';

function App() { 
  return (
      // <div className="container-fluid h-100">
      //   <div className="row">
      //       <AllContacts />
      //       <Chat />
      //   </div>
      // </div>

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/Login/Register' element={<Register />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Database' element={<Database users = {users}/>}></Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;
