import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

var userDetails = { userName: '', password: '', nickName: '', profilePicSrc: 'https://image.shutterstock.com/image-vector/cool-emoji-wearing-sun-glasses-260nw-337322426.jpg'}
export { userDetails };
var users = [];
export {users}
    

ReactDOM.render(<App />, document.getElementById("root"));