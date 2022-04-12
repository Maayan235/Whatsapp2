import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Register from "./Register";
import Login from './Login';
import "./styles.css";

export default function LandingPage() {

    return (
        <>
            <h1 className="title"> Landing Page..</h1>

             <Link className = "landButtons" to='/Login/Register' ><button>  register </button> </Link><br />
            <Link className = "landButtons" to='/Login'><button>  Login  </button> </Link>
                
        </>
    );
}