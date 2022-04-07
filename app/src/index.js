import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import "./styles.css";
import Register from "./Register";
import {Login} from  "./Login.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


var users = [];
export {users}





ReactDOM.render(<Login />, document.getElementById("root"));
