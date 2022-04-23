import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

var userDetails = { userName: '', password: '', nickName: '' }
export { userDetails };
var users = [];
export {users}
    

ReactDOM.render(<App />, document.getElementById("root"));