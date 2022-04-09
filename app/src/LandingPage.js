import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Register from "./Register";
import Login from './Login';
import "./styles.css";

export default function LandingPage() {

    return (
        <>
            <h1 className="title"> The best chat</h1>

             <Link className = "landButtons" to='/Register' ><button>register</button> </Link><br />
            <Link className = "landButtons" to='/Login'><button>  Login  </button> </Link>
                
        </>
    );
}