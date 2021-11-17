import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let _callSubscriber = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.addPost.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)} addMessage={store.addMessage.bind(store)}
                     updateMessageText={store.updateMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
_callSubscriber(store.getState());
store.subscribe (_callSubscriber);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
