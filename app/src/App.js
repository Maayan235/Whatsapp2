import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Register from "./Register";
import Login from './Login';
import LandingPage from './LandingPage';
import Database from './Database';
import { users } from './index';

function App() {
  return (


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
