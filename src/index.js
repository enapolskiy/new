import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let sendData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "John"},
    {id: 3, name: "Mike"},
    {id: 4, name: "Vincent"},
    {id: 5, name: "Sonya"},
];
let messageData = [
    {id: 1, message: "Hi! How are you?"},
    {id: 2, message: "Im fine. what about you?"},
    {id: 3, message: "Oy! im very glad to see you"},
    {id: 4, message: "Cool site!!"},
    {id: 5, message: "Cool site eah!!"}
]
let ChatMessage = [
    {id:1, message:"Hi! how are you?", like:"likes 12"},
    {id:2, message:"Its my first post!", like:"likes 22"},
    {id:1, message:"Hi! how are you?", like:"likes 12"},
    {id:2, message:"Its my first post!", like:"likes 22"},
    {id:1, message:"Hi! how are you?", like:"likes 12"},
    {id:2, message:"Its my first post!", like:"likes 22"}
]

ReactDOM.render(
  <React.StrictMode>
    <App sendData={sendData} messageData={messageData} ChatMessage={ChatMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
